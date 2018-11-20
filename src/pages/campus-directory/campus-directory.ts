import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {concat} from "rxjs/operator/concat";

@IonicPage()
@Component({
  selector: 'page-campus-directory',
  templateUrl: 'campus-directory.html',
})
export class CampusDirectory {
  @ViewChild(Content) content: Content;
  searchInput: string = '';
  shouldShowCancel: boolean = true;
  names: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampusDirectory');
  }

  goToPage(page) {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    if(page == 1) {
    this.navCtrl.setRoot(HomePage);
    }
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Headline3 back button pressed');
    this.navCtrl.pop();
  }

  search(event) {
    let urlbase = "https://uaedu-prod.modolabs.net/people/search?search=Search&filter=";
    let url = urlbase.concat(this.searchInput);
    let headers = new HttpHeaders();
    let responseHtml;
    headers.append('Content-Type', 'text/html');
    this.http.get(url,{headers: headers}).subscribe(
      data => responseHtml=data,
      err => console.log(err),
      () => console.log('Completed')
    );
    console.log(responseHtml);
    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(responseHtml, 'text/html');
    let rawElements = parsedHtml.getElementById('kgoui_Rcontent_I0_Rcontent_I0_Ritems').children;
    for(let i = 0; i < rawElements.length; i++) {
      let name = rawElements[i].getElementsByClassName('kgoui_list_item_title')[0].innerHTML;
      this.names.push(name);
    }

  }
}
