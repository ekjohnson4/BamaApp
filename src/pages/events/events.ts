import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Today } from '../events/today';
import { Tomorrow } from '../events/tomorrow';
import { Article1Page } from '../news/articles/article1';
import { News } from '../news/news';
import { Headline1Page } from '../home/headlines/headline1/headline1';
import { Headline2Page } from '../home/headlines/headline2/headline2';
import { Headline3Page } from '../home/headlines/headline3/headline3';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class Events {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Events');
  }

  goToPage() {
    this.navCtrl.setRoot(HomePage);
  }

  btnClicked(){
   this.navCtrl.push(Today)
   
  }
  btnClicked1(){
   this.navCtrl.push(Tomorrow);
  }

  onInput(event){

  }

  news1(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'<b>Date:</b> Monday, November 19, 2018<br/><b>Time:</b> 08:30 AM - 12:00 PM<br/><b>Location:</b> Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
    news2(){
        let alert = this.alertCtrl.create({
          title:'Take Our Children to Work Day',
          subTitle:'<b>Date:</b> Monday, November 19, 2018<br/><b>Time:</b> 08:30 AM - 03:00 PM<br/><b>Location:</b> Ballroom Ferguson Student Center<br/><b>Cost:</b> FREE',
          buttons:['Done']
        });
        alert.present();
  }  
  news3(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news4(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news5(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news6(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news7(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news8(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news9(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news10(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
  news11(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }  
}
