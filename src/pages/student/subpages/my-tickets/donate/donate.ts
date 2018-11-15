import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, AlertController } from 'ionic-angular';
import { HomePage } from '../../../../home/home';

@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class Donate {
  confirmation:string = 'OW4WURAIL3NYLTA';

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
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
    let alert = this.alertCtrl.create({
      title:'Ticket Donated',
      subTitle:'Thank you for your donation! Your confirmation number is ' + this.confirmation.bold() +'.',
      buttons:[{text: 'Ok',
              handler: () => {
              this.navCtrl.pop();
              }
            }]
    });
    alert.present();
  }
}
