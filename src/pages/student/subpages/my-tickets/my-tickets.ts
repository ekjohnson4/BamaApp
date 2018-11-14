import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../../home/home';
import { Transfer } from './transfer/transfer';
import { Donate } from './donate/donate';

@IonicPage()
@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTickets {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTickets');
  }

  goToPage(page) {
    if(page == 1) {
    this.navCtrl.setRoot(HomePage);
    }
    else if(page == 2) {
    this.navCtrl.push(Transfer);
    }
    else if(page == 3) {
    this.navCtrl.push(Donate);
    }
  }

  goBack() {
    this.navCtrl.pop();
    console.log('MyTickets back button pressed')
  }

}
