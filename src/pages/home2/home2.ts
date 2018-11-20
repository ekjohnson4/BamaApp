import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, AlertController } from 'ionic-angular';
import { Article1Page } from '../news/articles/article1';
import { CampusEvents } from '../events/events';
import { ActionCard } from '../student/subpages/action-card/action-card';
import { News } from '../news/news';
import { Headline1Page } from '../home/headlines/headline1/headline1';
import { Headline2Page } from '../home/headlines/headline2/headline2';
import { Headline3Page } from '../home/headlines/headline3/headline3';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class HomePage2 {
  ticket1:string = '';
  ticket2:string = '';
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public global: GlobalvarsProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTickets');
    if(this.global.ticket === 1){
      this.ticket1 = 'Alabama Vs. Tennessee';
      this.ticket2 = 'Lower Bowl - Gate 23';
    }
    else{
      this.ticket1 = 'No Ticket';
      this.ticket2 = '--';
    }
  }

  openArticle(article) {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Opening article ' + article);

    if(article == 1) {
      this.navCtrl.push(Article1Page);
    }
    else if(article == 2){
      this.navCtrl.push(Headline1Page);
    }
    else if(article == 3){
      this.navCtrl.push(Headline2Page);
    }
    else if(article == 4){
      this.navCtrl.push(Headline3Page);
    }
    else if(article == 5){
      this.navCtrl.push(CampusEvents);
    }
    else if(article == 6){
      this.navCtrl.push(ActionCard);
    }
    else if(article == 7){
      this.navCtrl.push(News);
    }
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
          title:'Exhibit: Black Belt Alabama',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
}
