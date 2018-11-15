import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../../../../../home/home';

@IonicPage()
@Component({
  selector: 'page-class4',
  templateUrl: 'class4.html',
})
export class Class4 {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Class4');
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Class4 back button pressed');
    this.navCtrl.pop();
  }

  goTop() {
    this.content.scrollToTop();
  }

  goHome() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');
    this.navCtrl.setRoot(HomePage);
  }
}
