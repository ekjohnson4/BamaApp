import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../../../../home/home';

@IonicPage()
@Component({
  selector: 'page-class4',
  templateUrl: 'class4.html',
})
export class Class4 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Class4');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    this.navCtrl.pop();
    console.log('Class4 back button pressed')
  }
}
