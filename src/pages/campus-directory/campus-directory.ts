import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../home/home';
import {ViewPerson} from "./view-person";


@IonicPage()
@Component({
  selector: 'page-campus-directory',
  templateUrl: 'campus-directory.html',
})
export class CampusDirectory {
  @ViewChild(Content) content: Content;
  searchInput: string = '';
  shouldShowCancel: boolean = true;
  shouldAutocomplete: boolean = true;
  header: string;
  names: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampusDirectory');
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
  initList() {
    this.names = [
      "Nick Saban",
      "Nick Johnson",
      "Nick Foster",
      "Nicky Shuster",
      "Nickolas Hester",
      "Nicklaus Freeman",
      "Nicole Williams",
      "Nigel Jones",
      "Muriel Rogers",
      "Blanche James",
      "Naomi Cain",
      "Jodi Fuller",
      "Carla Cole",
      "Judy Gonzalez",
      "Charlene Reyes",
      "Andy Simon",
      "Andre Huff",
      "Antonio Perez",
    ];
  }
  search(event) {
    //Populate list with all names
    this.initList();

    //Use Jacob's technique to filter search results as you type
    //Don't filter on empty or null string
    if(this.searchInput && this.searchInput.trim() != '') {
      this.names = this.names.filter((name) => {
        return name.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1;
      });
    }
  }
  onCancel(event) {
    this.searchInput = '';
    this.names = [];
    this
  }
  listClicked(name) {
    this.navCtrl.push(ViewPerson, {
      name: name
    });
  }
}
