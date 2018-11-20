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

}
