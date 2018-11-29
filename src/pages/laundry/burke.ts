import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-burke',
  templateUrl: 'burke.html',
})
export class Burke {
  room: string = 'initialName';
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Burke');
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
        let alert = this.alertCtrl.create({
          title:'Notify When Done',
          subTitle:'Input phone number:',
                inputs: [ 
        {
          name: 'phone',
          placeholder: 'Phone Number',
          type: 'tel'
        },
      ],
      buttons: [
        {
          text: 'Notify',
          handler: data => {
                        alert1.present();
                    }
        }
      ]
       });
        alert.present();

  }
}
