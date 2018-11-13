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


@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class Events {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
