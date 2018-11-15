import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content  } from 'ionic-angular';
import { HomePage } from '../../../home/home';
import { Class1 } from './classes/class1/class1';
import { Class2 } from './classes/class2/class2';
import { Class3 } from './classes/class3/class3';
import { Class4 } from './classes/class4/class4';

@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class Grades {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Grades');
  }

  goToPage(page) {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    if(page == 1) {
    this.navCtrl.setRoot(HomePage);
    }
    else if(page == 2) {
    this.navCtrl.push(Class1);
    }
    else if(page == 3) {
    this.navCtrl.push(Class2);
    }
    else if(page == 4) {
    this.navCtrl.push(Class3);
    }
    else if(page == 5) {
    this.navCtrl.push(Class4);
    }
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
}
