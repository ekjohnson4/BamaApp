import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-friedman',
  templateUrl: 'friedman.html',
})
export class Friedman {
  room: string = 'initialName';
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Friedman');
  }

  goToPage(page) {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    if(page == 1) {
    this.navCtrl.setRoot(HomePage);
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

  btnClicked(){
        let alert1 = this.alertCtrl.create({
          title:'Success!',
          subTitle:'You will receive a text when the washer/dryer is done running.',
          buttons:[
          {
                    text: 'Done',

        }
          ]
        });
        let alert2 = this.alertCtrl.create({
          title:'Invalid phone number',
          subTitle:'Please enter valid phone number ex. (xxx-xxx-xxxx)',
          buttons:[
          {
                    text: 'Try again',

        }
          ]
        });
        let alert = this.alertCtrl.create({
          title:'Notify When Done',
          subTitle:'Input phone number (xxx-xxx-xxxx):',
                inputs: [ 
        {
          name: 'phone',
          placeholder: 'Phone Number',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Notify',
          handler: (data: any) => {
                        console.log(data.phone);
                        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
                        var digits = data.phone.replace(/\D/g, "");
                        var test = phoneRe.test(digits);
                        console.log("test is " + test);
                        if(test == false) {
                          alert2.present();
                        }
                        else {
                          alert1.present();
                        }
                    }
        }
      ]
       });
        alert.present();

  }
}
