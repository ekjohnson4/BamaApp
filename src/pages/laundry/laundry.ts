import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-laundry',
  templateUrl: 'laundry.html',
})
export class Laundry {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Laundry');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }
}
