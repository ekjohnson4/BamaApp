import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events, AlertController } from 'ionic-angular';
import { Today } from '../events/today';
import { Tomorrow } from '../events/tomorrow';
import { Week } from '../events/week';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class CampusEvents {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
  public loadingCtrl: LoadingController, public eventMenu: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Events');
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

  btnClicked(){
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    this.navCtrl.push(Today)

  }

  btnClicked1(){
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    this.navCtrl.push(Tomorrow);
  }

  btnClicked2(){
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();

    console.log('Title clicked');

    this.navCtrl.push(Week);
  }

  onInput(event){

  }

  news1(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'<b>Date:</b> Monday, November 19, 2018<br/><b>Time:</b> 08:30 AM - 12:00 PM<br/><b>Location:</b> Classroom Employee Resource Center</br></br>New Staff Orientation welcomes new UA employees to campus life by introducing them to the people, places, programs, policies and benefits that make The University of Alabama a great place to work.',
          buttons:['Done']
        });
        alert.present();
  }
    news2(){
        let alert = this.alertCtrl.create({
          title:'Take Our Children to Work Day',
          subTitle:'<b>Date:</b> Monday, November 19, 2018<br/><b>Time:</b> 08:30 AM - 03:00 PM<br/><b>Location:</b> Ballroom Ferguson Student Center<br/><b>Cost:</b> FREE',
          buttons:['Done']
        });
        alert.present();
  }
  news3(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news4(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news5(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news6(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news7(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news8(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news9(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news10(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
  }
  news11(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Monday, November 19, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
          buttons:['Done']
        });
        alert.present();
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
}
