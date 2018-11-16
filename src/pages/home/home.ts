import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { Article1Page } from '../news/articles/article1';
import { MyTickets } from '../student/subpages/my-tickets/my-tickets';
import { ActionCard } from '../student/subpages/action-card/action-card';
import { News } from '../news/news';
import { Headline1Page } from './headlines/headline1/headline1';
import { Headline2Page } from './headlines/headline2/headline2';
import { Headline3Page } from './headlines/headline3/headline3';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
      this.navCtrl.push(MyTickets);
    }
    else if(article == 6){
      this.navCtrl.push(ActionCard);
    }
    else if(article == 7){
      this.navCtrl.push(News);
    }
  }
}
