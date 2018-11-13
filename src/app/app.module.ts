import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { Headline1Page } from '../pages/home/headlines/headline1/headline1';
import { Headline2Page } from '../pages/home/headlines/headline2/headline2';
import { Headline3Page } from '../pages/home/headlines/headline3/headline3';
import { HomePage } from '../pages/home/home';
import { HomePage2 } from '../pages/home2/home2';
import { CampusMap } from '../pages/campus-map/campus-map';
import { Student } from '../pages/student/student';
import { ActionCard } from '../pages/student/subpages/action-card/action-card';
import { Grades } from '../pages/student/subpages/grades/grades';
import { MyTickets } from '../pages/student/subpages/my-tickets/my-tickets';
import { Schedule } from '../pages/student/subpages/schedule/schedule';
import { CourseCatalog } from '../pages/course-catalog/course-catalog';
import { Emergency } from '../pages/emergency/emergency';
import { Transportation } from '../pages/transportation/transportation';
import { CampusDirectory } from '../pages/campus-directory/campus-directory';
import { Laundry } from '../pages/laundry/laundry';
import { Events } from '../pages/events/events';
import { Links } from '../pages/links/links';
import { News } from '../pages/news/news';
import { Article1Page } from '../pages/news/articles/article1';
import { Article2Page } from '../pages/news/articles/article2';
import { Article3Page } from '../pages/news/articles/article3';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    HomePage2,
    CampusMap,
    Student,
    CourseCatalog,
    Emergency,
    Transportation,
    CampusDirectory,
    Laundry,
    Events,
    Links,
    News,
    Article1Page,
    Article2Page,
    Article3Page,
    Headline1Page,
    Headline2Page,
    Headline3Page,
    ActionCard,
    Grades,
    MyTickets,
    Schedule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    HomePage2,
    CampusMap,
    Student,
    CourseCatalog,
    Emergency,
    Transportation,
    CampusDirectory,
    Laundry,
    Events,
    Links,
    News,
    Article1Page,
    Article2Page,
    Article3Page,
    Headline1Page,
    Headline2Page,
    Headline3Page,
    ActionCard,
    Grades,
    MyTickets,
    Schedule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
