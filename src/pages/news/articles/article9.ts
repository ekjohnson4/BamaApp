import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../../home/home';

/**
 * Generated class for the Article9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article9',
  templateUrl: 'article9.html',
})
export class Article9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Article9Page');
  }
  
  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    console.log('Article9Page back button pressed');
    this.navCtrl.pop();
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