import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events } from 'ionic-angular';

/**
 * Generated class for the Article1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article1',
  templateUrl: 'article1.html',
})
export class Article1Page {
  @ViewChild(Content) content: Content;
  fontSize: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public eventMenu: Events) {
    
    this.eventMenu.subscribe('change:font', (data) =>{
      this.fontSize = data;
      const body = document.getElementById('test-font');
      if(this.fontSize == 1) {
        body.setAttribute('style',`font-size: 100%`);
      }
      else if(this.fontSize == 2) {
        body.setAttribute('style',`font-size: 130%`);
      }
      else {
        body.setAttribute('style',`font-size: 160%`);
      }
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Article1Page');
  }
  
  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    console.log('Article1Page back button pressed');
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
    this.eventMenu.publish('go:home');
  }

}