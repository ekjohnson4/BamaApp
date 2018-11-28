import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tomorrow',
  templateUrl: 'tomorrow.html',
})
export class Tomorrow {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public eventMenu: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tomorrow');
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
      news1(){
        let alert = this.alertCtrl.create({
          title:'Tuscaloosa Bicentennial Exhibit Series: Tuscaloosa and the Capital Period',
          subTitle:'<b>Date:</b> Saturday, December 01, 2018<br/><b>Time:</b> 10:00 AM - 04:30 PM<br/><b>Location:</b> Across from the Tuscaloosa Public Library Mildred Westervelt Warner Transportation Museum <br/><b>Cost:</b> FREE</br></br> The Mildred Westervelt Warner Transportation Museum of UA Museums is proud to present the Tuscaloosa Bicentennial Exhibit Series.  The series showcases the history of the city learned from the archaeological excavations of the Bank of the State site in downtown Tuscaloosa where the Embassy Suites Hotel stands. ',
          buttons:['Done']
        });
        alert.present();
  }
    news2(){
        let alert = this.alertCtrl.create({
          title:'SEC Championship Watch Party',
          subTitle:'<b>Date:</b> Saturday, December 01, 2018<br/><b>Time:</b> 02:00 PM - 07:00 PM<br/><b>Location:</b> Ballroom Ferguson Student Center<br/><b>Cost:</b> FREE!</br></br>University Programs will be hosting a watch party when the Alabama Crimson Tide takes on the Georgia Bulldogs for the SEC Championship. This event will feature catered food, along with assorted drinks, giveaways, and activities. ',
          buttons:['Done']
        });
        alert.present();
  }
  news3(){
        let alert = this.alertCtrl.create({
          title:'Exhibit: Of This Goodly Land: Celebrating Alabamas Bicentennial, 1819-2019',
          subTitle:'<b>Date:</b> Saturday, December 01, 2018</br><b>Time:</b> <i>All Day</i></br><b>Location:</b> Gorgas Library</br></br>This exhibit covers a variety of topics, including historical moments like the early statehood period; secession, Civil War and Reconstruction; the Space Race; and the Civil Rights Movement.  It also looks at major industries from cotton and timber to coal and steel.  Other subjects include education, transportation, politics, nature and the arts.',
          buttons:['Done']
        });
        alert.present();
  }
  news4(){
        let alert = this.alertCtrl.create({
          title:'Turning The Tide : Canned Food Drive',
          subTitle:'<b>Date:</b> Saturday, December 01, 2018</br><b>Time:</b> <i>All Day</i></br><b>Location:</b>Ferguson Student Center</br></br>Turning The Tide will be having a canned food drive from November 26th to December 1st.',
          buttons:['Done']
        });
        alert.present();
  }
}
