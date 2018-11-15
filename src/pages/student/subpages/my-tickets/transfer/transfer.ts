import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, AlertController } from 'ionic-angular';
import { HomePage } from '../../../../home/home';

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class Transfer {
  bamaId:string = '';
  confirmation:string = 'OW4WURAIL3NYLTA';

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Transfer');
  }

  transfer(){
    console.log("Bama ID: " + this.bamaId)

    if(this.bamaId === ''){
      let alert = this.alertCtrl.create({
        title:'Transfer Error',
        subTitle:'Bama ID required.',
        buttons:['OK']
      });
      alert.present();
      return;
    }

    let alert = this.alertCtrl.create({
      title:'Success!',
      subTitle:'Ticket transferred to ' + this.bamaId.bold() +'. Your confirmation number is ' + this.confirmation.bold() +'.',
      buttons:[{text: 'Ok',
              handler: () => {
              this.navCtrl.pop();
              }
            }]
    });
    alert.present();
    return;
  }

  goToPage() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    this.navCtrl.setRoot(HomePage);
  }

  goBack() {
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('MyTickets back button pressed');
    this.navCtrl.pop();
  }
}
