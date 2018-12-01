import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class Emergency {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController, public eventMenu: Events,
  private callNumber: CallNumber) {
  }

  goToPage(page) {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    if(page == 1) {
    this.eventMenu.publish('go:home');
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

  makeCall(phonenum) {
    if(this.callNumber.isCallSupported()) {
      this.callNumber.callNumber(phonenum,true)
        .then(res => console.log("Launched Dialer", res))
        .catch(err => console.log("Could not launch dialer", err));
    }
  }
}
