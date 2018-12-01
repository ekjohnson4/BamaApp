import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, AlertController   } from 'ionic-angular';
import { HomePage } from '../../../home/home';
import { Transfer } from './transfer/transfer';
import { Donate } from './donate/donate';
import { GlobalvarsProvider } from '../../../../providers/globalvars/globalvars';

@IonicPage()
@Component({
  selector: 'page-my-tickets',
  templateUrl: 'my-tickets.html',
})
export class MyTickets {
  ticket1:string = '';
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public global: GlobalvarsProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTickets');
    if(this.global.ticket === 1){
      this.ticket1 = 'Week 8 - Alabama vs Tennessee';
    }
    else{
      this.ticket1 = 'No Ticket';
    }
  }

  goToPage(page) {
    if(page == 1) {
      let loading = this.loadingCtrl.create({
      content: 'Loading...',
      dismissOnPageChange: true
      });
      loading.present();

      console.log('Title clicked');
      this.navCtrl.setRoot(HomePage);
    }

    else if(page == 2) {
      if(this.global.ticket === 1){
        let loading = this.loadingCtrl.create({
        content: 'Loading...',
        dismissOnPageChange: true
        });
        loading.present();

        console.log('Title clicked');
        this.navCtrl.push(Transfer);
      }
      else{
        let alert = this.alertCtrl.create({
          title:'Transfer Error',
          subTitle:'No ticket...',
          buttons:['OK']
        });
        alert.present();
      }
    }

    else if(page == 3) {
      if(this.global.ticket === 1){
        let loading = this.loadingCtrl.create({
        content: 'Loading...',
        dismissOnPageChange: true
        });
        loading.present();

        console.log('Title clicked');
        this.navCtrl.push(Donate);
      }
      else{
        let alert = this.alertCtrl.create({
          title:'Donate Error',
          subTitle:'No ticket...',
          buttons:['OK']
        });
        alert.present();
      }
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
