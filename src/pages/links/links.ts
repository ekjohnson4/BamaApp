import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-links',
  templateUrl: 'links.html',
})
export class Links {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Links');
  }

  goToPage(page) {
    if(page == 1) {
    this.navCtrl.setRoot(HomePage);
    }
  }
}
