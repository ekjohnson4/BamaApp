import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../../../../../home/home';

@IonicPage()
@Component({
  selector: 'page-class2',
  templateUrl: 'class2.html',
})
export class Class2 {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Class2');
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Class2 back button pressed');
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
