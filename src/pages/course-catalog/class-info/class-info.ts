import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../../home/home';

@IonicPage()
@Component({
  selector: 'page-class-info',
  templateUrl: 'class-info.html',
})
export class ClassInfo {
  @ViewChild(Content) content: Content;
  classData: Array<{title: string, credits: string, CRN: string, startDate: string, endDate: string, scheduleDate: string, scheduleTime: string, building: string, room: string, instructor: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController) {
    this.classData = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassInfo');
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
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('ClassInfo back button pressed');
    this.navCtrl.pop();
  }
}