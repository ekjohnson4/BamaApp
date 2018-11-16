import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../../../home/home';
import { DiningDollars } from './dining-dollars';
import { BamaCash } from './bama-cash';

@IonicPage()
@Component({
  selector: 'page-action-card',
  templateUrl: 'action-card.html',
})
export class ActionCard {
  items = [
    'Lost/Stolen Card'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionCard');
  }
  
  openDiningDollars() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    this.navCtrl.push(DiningDollars);
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title:'Lost/Stolen Card',
      subTitle:'Immediately report your card lost or stolen. During regular business hours, call Action Card at 205.348.2288 and after hours or holidays, call UAPD at 205.348.5454.',
      buttons:['OK']
    });
    alert.present();
  }
  
  openBamaCash() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    this.navCtrl.push(BamaCash);
  }

  goHome() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    this.navCtrl.pop();
    console.log('ActionCard back button pressed')
  }
  
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
