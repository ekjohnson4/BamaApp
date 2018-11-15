import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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
import { Events } from '../pages/events/events';
import { Links } from '../pages/links/links';
import { News } from '../pages/news/news';
import { Grades } from '../pages/student/subpages/grades/grades';
import { Schedule } from '../pages/student/subpages/schedule/schedule';
import { MyTickets } from '../pages/student/subpages/my-tickets/my-tickets';
import { ActionCard } from '../pages/student/subpages/action-card/action-card';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  searchQuery: string = '';
  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;
  items: string[];
  test: string[];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Home', component: HomePage2 },
      { title: 'Campus Map', component: CampusMap },
      { title: 'Student', component: Student },
      { title: 'Course Catalog', component: CourseCatalog },
      { title: 'News', component: News },
      { title: 'Emergency', component: Emergency },
      { title: 'Transportation', component: Transportation },
      { title: 'Campus Directory', component: CampusDirectory },
      { title: 'Laundry', component: Laundry },
      { title: 'Events', component: Events },
      { title: 'Links', component: Links }
    ];
    this.initializeItems();
  }
  
  initializeItems() {
    this.items = [
      { title: 'Home', component: HomePage },
      { title: 'Home', component: HomePage2 },
      { title: 'Campus Map', component: CampusMap },
      { title: 'Student', component: Student },
      { title: 'Course Catalog', component: CourseCatalog },
      { title: 'News', component: News },
      { title: 'Emergency', component: Emergency },
      { title: 'Transportation', component: Transportation },
      { title: 'Campus Directory', component: CampusDirectory },
      { title: 'Laundry', component: Laundry },
      { title: 'Events', component: Events },
      { title: 'Links', component: Links },
      { title: 'Grades', component: Grades },
      { title: 'Schedule', component: Schedule },
      { title: 'My Tickets', component: MyTickets },
      { title: 'Action Card', component: ActionCard }
      ];
  }
initializePages() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Home', component: HomePage2 },
      { title: 'Campus Map', component: CampusMap },
      { title: 'Student', component: Student },
      { title: 'Course Catalog', component: CourseCatalog },
      { title: 'News', component: News },
      { title: 'Emergency', component: Emergency },
      { title: 'Transportation', component: Transportation },
      { title: 'Campus Directory', component: CampusDirectory },
      { title: 'Laundry', component: Laundry },
      { title: 'Events', component: Events },
      { title: 'Links', component: Links }
      ];
  }
  
  openPage(real) {
    console.log("Page is " + real.title);
    if(real.title === "Home") {
      this.nav.setRoot(real.component);
    }
    else {
      this.nav.push(real.component);
    }
  }
  
  getItems(ev: any) {
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

}
