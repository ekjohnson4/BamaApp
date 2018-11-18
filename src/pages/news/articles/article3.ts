import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events } from 'ionic-angular';

/**
 * Generated class for the Article3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article3',
  templateUrl: 'article3.html',
})
export class Article3Page {
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public eventMenu: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Article3Page');
  }
  
  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    this.navCtrl.pop();
    console.log('Article3Page back button pressed')
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
    this.eventMenu.publish('go:home');
  }

}