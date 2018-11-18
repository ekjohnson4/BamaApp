import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { HomePage2 } from '../pages/home2/home2';
import { CampusMap } from '../pages/campus-map/campus-map';
import { Student } from '../pages/student/student';
import { CourseCatalog } from '../pages/course-catalog/course-catalog';
import { Emergency } from '../pages/emergency/emergency';
import { Transportation } from '../pages/transportation/transportation';
import { CampusDirectory } from '../pages/campus-directory/campus-directory';
import { Laundry } from '../pages/laundry/laundry';
import { CampusEvents } from '../pages/events/events';
import { Links } from '../pages/links/links';
import { News } from '../pages/news/news';
import { Grades } from '../pages/student/subpages/grades/grades';
import { Schedule } from '../pages/student/subpages/schedule/schedule';
import { MyTickets } from '../pages/student/subpages/my-tickets/my-tickets';
import { ActionCard } from '../pages/student/subpages/action-card/action-card';
import { Transfer } from '../pages/student/subpages/my-tickets/transfer/transfer';
import { Donate } from '../pages/student/subpages/my-tickets/donate/donate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  searchQuery: string = '';
  rootPage:any = LoginPage;
  fontSize: number = 3;
  // whether to display menu for student or visitor (0=student, 1=visitor)
  menuToggle: number = 0;

  pages: Array<{title: string, component: any}>;
  items: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public eventMenu: Events) {
    
    // listen on event to determine which menu to display
    this.eventMenu.subscribe('visitor:login', (data) =>{
      this.menuToggle = data;
      console.log('menuToggle is ' + this.menuToggle);
      this.initializePages();
      this.initializeItems();
  });
    // listen on event to determine which home page to open (only for pages that are part of student and visitor login menu)
    this.eventMenu.subscribe('go:home', () =>{
      this.openPage(this.pages[0]);
  });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }

  initializePages() {
    var toggle = this.menuToggle;
    console.log('toggle value in initializePages is ' + toggle);
    if(toggle == 0) {
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Campus Map', component: CampusMap },
        { title: 'Student', component: Student },
        { title: 'Course Catalog', component: CourseCatalog },
        { title: 'News', component: News },
        { title: 'Emergency', component: Emergency },
        { title: 'Transportation', component: Transportation },
        { title: 'Campus Directory', component: CampusDirectory },
        { title: 'Laundry', component: Laundry },
        { title: 'Events', component: CampusEvents },
        { title: 'Links', component: Links }
      ];
    }
    else {
      this.pages = [
        { title: 'Home', component: HomePage2 },
        { title: 'Campus Map', component: CampusMap },
        { title: 'News', component: News },
        { title: 'Emergency', component: Emergency },
        { title: 'Transportation', component: Transportation },
        { title: 'Events', component: CampusEvents },
        { title: 'Links', component: Links }
      ];
    }
  }

  initializeItems() {
    var toggle = this.menuToggle;
    console.log('toggle in initializeItems is ' + toggle);
    if(toggle == 0) {
  	   this.items = [
         { title: 'Home', component: HomePage },
         { title: 'Campus Map', component: CampusMap },
         { title: 'Student', component: Student },
         { title: 'Course Catalog', component: CourseCatalog },
         { title: 'News', component: News },
         { title: 'Emergency', component: Emergency },
         { title: 'Transportation', component: Transportation },
         { title: 'Campus Directory', component: CampusDirectory },
         { title: 'Laundry', component: Laundry },
         { title: 'Events', component: CampusEvents },
         { title: 'Links', component: Links },
         { title: 'Grades', component: Grades },
         { title: 'Schedule', component: Schedule },
         { title: 'My Tickets', component: MyTickets },
         { title: 'Action Card', component: ActionCard },
         { title: 'Donate Ticket', component: Donate },
         { title: 'Transfer Ticket', component: Transfer }
      ];
    }
    else {
      this.items = [
        { title: 'Home', component: HomePage2 },
        { title: 'Campus Map', component: CampusMap },
        { title: 'News', component: News },
        { title: 'Emergency', component: Emergency },
        { title: 'Transportation', component: Transportation },
        { title: 'Events', component: CampusEvents },
        { title: 'Links', component: Links },
        ];
    }
  }

  openPage(real) {
    this.initializePages();
    console.log("Page is " + real.title);
    if(real.title == "Home") {
      this.nav.setRoot(real.component);
    }
    else {
      this.nav.push(real.component);
    }
  }

  getItems(ev: any) {
    console.log('getting items');
    // Reset items back to all of the items
    this.initializeItems();
    this.initializePages();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.pages = this.items;
    }
  }

  onChange() {
    console.log(this.fontSize);
  }
  
  signIn() {
    console.log("Going to login page");
    this.nav.setRoot(LoginPage);
  }
}
