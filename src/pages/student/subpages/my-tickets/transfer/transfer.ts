import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../../../../home/home';

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class Transfer {

  bamaId:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Transfer');
  }

  transfer(){
    console.log("Bama ID: " + this.bamaId)

    let alert = this.alertCtrl.create({
      title:'Success!',
      subTitle:'Ticket transferred to ' + this.bamaId +'.',
      buttons:['OK']
    });
    alert.present();
    return;
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    this.navCtrl.pop();
    console.log('Transfer back button pressed')
  }
}
