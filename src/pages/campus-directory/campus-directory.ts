import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../home/home';
import {ViewPerson} from "./view-person";


@IonicPage()
@Component({
  selector: 'page-campus-directory',
  templateUrl: 'campus-directory.html',
})
export class CampusDirectory {
  @ViewChild(Content) content: Content;
  searchInput: string = '';
  shouldShowCancel: boolean = true;
  shouldAutocomplete: boolean = true;
  header: string;
  names: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
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
    this.names = [];
    if("nick saban".search(this.searchInput.toLowerCase()) != -1)
      this.names.push("Nick Saban");
    if("nick".search(this.searchInput.toLowerCase()) != -1) {
      this.names.push("Nick Johnson");
      this.names.push("Nick Foster");
      this.names.push("Nicky Shuster");
      this.names.push("Nickolas Hester");
      this.names.push("Nicklaus Freeman");
    }
    else
      this.header = 'No Results Found';
  }
  listClicked(name) {
    this.navCtrl.push(ViewPerson, {
      name: name
    });
  }
}
