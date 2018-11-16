import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';
//import { HomePage2 } from '../home2/home2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  bamaId:string = '';
  password:string = '';

  constructor(public navCtrl: NavController,  public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  login(){
    console.log("Bama ID: "+ this.bamaId)
    console.log("Password: "+ this.password)

    if(this.bamaId === '' || this.password === ''){
        let alert = this.alertCtrl.create({
          title:'Login Error',
          subTitle:'All fields are rquired',
          buttons:['OK']
        });
        alert.present();
        return;
      }

    else if(this.bamaId !== 'nlsaban' || this.password !== 'rolltide'){
        let alert = this.alertCtrl.create({
          title:'Login Error',
          subTitle:'Invalid credentials',
          buttons:['OK']
        });
        alert.present();
        return;
      }

    else{
      let loading = this.loadingCtrl.create({
      content: 'Loading...',
      dismissOnPageChange: true
      });
      loading.present();

      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }
  }

  notStudent(){
    let alert = this.alertCtrl.create({
      title:'Under construction...',
      subTitle:'Coming Soon!',
      buttons:['OK']
    });
    alert.present();
    return;
    //this.navCtrl.setRoot(HomePage2);
    //this.navCtrl.popToRoot();
  }
}
