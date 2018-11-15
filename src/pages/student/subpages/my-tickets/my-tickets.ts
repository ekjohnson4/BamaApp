import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content  } from 'ionic-angular';
import { HomePage } from '../../../home/home';
import { Transfer } from './transfer/transfer';
import { Donate } from './donate/donate';

@IonicPage()
@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTickets {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTickets');
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
    else if(page == 2) {
    this.navCtrl.push(Transfer);
    }
    else if(page == 3) {
    this.navCtrl.push(Donate);
    }
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('MyTickets back button pressed');
    this.navCtrl.pop();
  }
}
