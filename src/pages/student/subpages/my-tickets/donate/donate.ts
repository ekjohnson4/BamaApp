import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, AlertController } from 'ionic-angular';
import { HomePage } from '../../../../home/home';
import { GlobalvarsProvider } from '../../../../../providers/globalvars/globalvars';

@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class Donate {
  confirmation:string = 'OW4WURAIL3NYLTA';

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public global: GlobalvarsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Donate');
  }

  goToPage() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Donate back button pressed');
    this.navCtrl.pop();
  }

  donate(){
    console.log("Ticket: " + this.global.ticket);
    let alert = this.alertCtrl.create({
      title:'Ticket Donated',
      subTitle:'Thank you for your donation! Your confirmation number is ' + this.confirmation.bold() +'.',
      buttons:[{text: 'Ok',
              handler: () => {
              this.navCtrl.setRoot(HomePage);
              }
            }]
    });
    alert.present();
    this.global.ticket = 0;
    console.log("Ticket: " + this.global.ticket);
  }
}
