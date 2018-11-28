import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-view-person',
  templateUrl: 'view-person.html',
})
export class ViewPerson {
  @ViewChild(Content) content: Content;
  name: string = '';
  email: string = '';
  phone: string = '';
  office: string = '';
  department: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public eventMenu: Events,
              private callNumber: CallNumber, private  emailComposer: EmailComposer) {
    this.name = navParams.get('name');
    this.makeData()
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

  makeData() {
    if(this.name == null || this.name == '')
      return;
    //Get first letter and last name to get email
    let firstLetter = this.name[0].toLowerCase();
    let lastName = this.name.slice(this.name.indexOf(" ")+1,this.name.length).toLowerCase();
    let emailName = firstLetter.concat(lastName);
    this.email= emailName.concat('@crimson.ua.edu');
    //Set phone number
    this.phone = '(555)-555-5555';
    this.office = '100 Lloyd Hall';
    this.department = 'Athletics';
  }

  callPhone(number) {
    if(this.callNumber.isCallSupported())
    {
      this.callNumber.callNumber(number, true)
        .then(res => console.log("Launched Dialer", res))
        .catch(err => console.log("Could not launch dialer", err));
    }
  }
  makeEmail(email) {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      this.emailComposer.hasPermission().then((isPermitted: boolean) =>{
        let fullEmail: any = {
        to: email};
        this.emailComposer.open(fullEmail);
      })
        .catch(err => console.log("No email access permission granted", err));
    })
      .catch(err => console.log("Could not find email account", err));
  }
}
