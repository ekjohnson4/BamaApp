import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class Today {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public eventMenu: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Today');
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
          title:'Alabama Types: Poets, Playwrights & Storytellers',
          subTitle:'<b>Date:</b> Friday, November 30, 2018<br/><b>Time:</b> 09:00 AM - 05:00 PM<br/><b>Location:</b> University of Alabama gallery at the Dinah Washington Cultural Arts Center<br/><b>Cost:</b> FREE</br></br> Alabama Types: Poets, Playwrights & Storytellers, will open in The University Gallery, 620 Greensboro Avenue, Tuscaloosa, for the city’s First Friday art walk, November 2, and run through December 7, 2018.  The Tuscaloosa show will conclude a Southeastern traveling exhibition of vintage typewriters, arranged by The Southern Literary Trail and made possible by LAPD Commission President Steve Soboroff who has accumulated “the world’s greatest typewriter collection” per The Huffington Post.  The Soboroff Collection was first exhibited in the Paley Center for Media in Beverly Hills, California, and attracted nationwide press attention.  ',
          buttons:['Done']
        });
        alert.present();
  }
    news2(){
        let alert = this.alertCtrl.create({
          title:'Education Abroad Speed Advising',
          subTitle:'<b>Date:</b> Friday, November 30, 2018<br/><b>Time:</b> 09:00 AM - 11:00 AM<br/><b>Location:</b> 135 B.B. Comer Hall <br/><b>Cost:</b> FREE!</br></br>If you have a quick general question about study abroad, come see our study abroad advisors for a 15 minute walk in speed advising appointment!',
          buttons:['Done']
        });
        alert.present();
  }
  news3(){
        let alert = this.alertCtrl.create({
          title:'New Staff Orientation',
          subTitle:'Date: Friday, November 30, 2018\nTime: 08:30 AM - 12:00 PM\nLocation: Classroom Employee Resource Center',
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
}
