import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Article1Page } from '../news/articles/article1';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openArticle(article) {
    console.log('Opening article ' + article);
    if(article == 1) {
      this.navCtrl.push(Article1Page);
    }
    else if(article == 2){
      this.navCtrl.push(News);
    }
    else if(article == 3){
      this.navCtrl.push(Headline1Page);
    }
    else if(article == 4){
      this.navCtrl.push(Headline2Page);
    }
    else if(article == 5){
      this.navCtrl.push(Headline3Page);
    }
  }
}
