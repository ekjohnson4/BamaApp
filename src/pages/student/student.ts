import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ActionCard } from './subpages/action-card/action-card';
import { Grades } from './subpages/grades/grades';
import { MyTickets } from './subpages/my-tickets/my-tickets';
import { Schedule } from './subpages/schedule/schedule';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class Student {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Student');
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
    this.navCtrl.push(Grades);
    }
    else if(page == 3) {
    this.navCtrl.push(Schedule);
    }
    else if(page == 4) {
    this.navCtrl.push(MyTickets);
    }
    else if(page == 5) {
    this.navCtrl.push(ActionCard);
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
