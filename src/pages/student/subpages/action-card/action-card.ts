import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../../home/home';

@IonicPage()
@Component({
  selector: 'page-action-card',
  templateUrl: 'action-card.html',
})
export class ActionCard {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionCard');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    this.navCtrl.pop();
    console.log('ActionCard back button pressed')
  }

}
