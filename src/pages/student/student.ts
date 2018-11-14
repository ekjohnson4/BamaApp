import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Student');
  }

  goToPage(page) {
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
    this.navCtrl.pop();
    console.log('Student back button pressed')
  }
}
