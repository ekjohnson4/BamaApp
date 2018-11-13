import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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