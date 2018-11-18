import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Article1Page } from './articles/article1';
import { Article2Page } from './articles/article2';
import { Article3Page } from './articles/article3';
import { Article4Page } from './articles/article4';
import { Article5Page } from './articles/article5';
import { Article6Page } from './articles/article6';
import { Article7Page } from './articles/article7';
import { Article8Page } from './articles/article8';
import { Article9Page } from './articles/article9';
import { Article10Page } from './articles/article10';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class News {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public eventMenu: Events) {
  }
  
  @ViewChild('slides') slides: Slides;
  
  slidesInfo = [
    {
      title: 'First slide',
      description: 'First slide desc',
      image:'assets/imgs/news1.jpg',
      heading: 'TRENDING',
      paragraph: 'New Grad Program Integrates Data Analysis, Business Applications'
    },
    {
      title: 'Second slide',
      description: 'Second slide desc',
      image:'assets/imgs/news2.jpg',
      heading: 'TRENDING',
      paragraph: 'Campus Hours for Fall Break 2018'
    },
    {
      title: 'Third slide',
      description: 'Third slide desc',
      image:'assets/imgs/news3.jpg',
      heading: 'TRENDING',
      paragraph: 'UA Celebrates the Unveiling of H.M. Comer'
    }
  ]

  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  
  openArticle(index) {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    console.log('Opening article with index ' + index);
    if(index == 1) {
      this.navCtrl.push(Article1Page);
    }
    else if(index == 2) {
      this.navCtrl.push(Article2Page);
    }
    else {
      this.navCtrl.push(Article3Page);
    }
  }
  
  openNoSlideArticle(article) {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    if(article == 1) {
      this.navCtrl.push(Article4Page);
    }
    else if(article == 2) {
      this.navCtrl.push(Article5Page);
    }
    else if(article == 3) {
      this.navCtrl.push(Article6Page);
    }
    else if(article == 4) {
      this.navCtrl.push(Article7Page);
    }
    else if(article == 5) {
      this.navCtrl.push(Article8Page);
    }
    else if(article == 6) {
      this.navCtrl.push(Article9Page);
    }
    else if(article == 7) {
      this.navCtrl.push(Article10Page);
    }
  }
  
  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    console.log('NewsPage back button pressed');
    this.navCtrl.pop();
  }
  
  goHome() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    this.eventMenu.publish('go:home');
  }

}