import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../../home';

@IonicPage()
@Component({
  selector: 'page-headline1',
  templateUrl: 'headline1.html',
})
export class Headline1Page {
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Headline1Page');
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Headline1 back button pressed');
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
