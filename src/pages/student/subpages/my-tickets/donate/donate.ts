import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../../../../home/home';

@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class Donate {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Donate');
  }

  donate(){
    let alert = this.alertCtrl.create({
      title:'Ticket Donated',
      subTitle:'Thank you for your donation!',
      buttons:['OK']
    });
    alert.present();
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    this.navCtrl.pop();
    console.log('Donate back button pressed')
  }
}
