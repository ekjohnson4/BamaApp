import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../../home';

@IonicPage()
@Component({
  selector: 'page-headline3',
  templateUrl: 'headline3.html',
})
export class Headline3Page {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Headline3Page');
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Headline3 back button pressed');
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
