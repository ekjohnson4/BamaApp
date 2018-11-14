import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-tomorrow',
  templateUrl: 'tomorrow.html',
})
export class Tomorrow {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tomorrow');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }
 
}
