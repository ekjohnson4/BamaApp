import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class Today {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Today');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }
 
}
