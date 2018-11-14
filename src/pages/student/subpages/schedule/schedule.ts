import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../../home/home';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class Schedule {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schedule');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    this.navCtrl.pop();
    console.log('Schedule back button pressed')
  }

}
