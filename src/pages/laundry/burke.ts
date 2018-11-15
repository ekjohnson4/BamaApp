import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-burke',
  templateUrl: 'burke.html',
})
export class Burke {
  room: string = 'initialName';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Burke');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }

  
}
