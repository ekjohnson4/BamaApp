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
import { Article4Page } from '../pages/news/articles/article4';
import { Article5Page } from '../pages/news/articles/article5';
import { Article6Page } from '../pages/news/articles/article6';
import { Article7Page } from '../pages/news/articles/article7';
import { Article8Page } from '../pages/news/articles/article8';
import { Article9Page } from '../pages/news/articles/article9';
import { Article10Page } from '../pages/news/articles/article10';

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
    Article4Page,
    Article5Page,
    Article6Page,
    Article7Page,
    Article8Page,
    Article9Page,
    Article10Page
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
    Article4Page,
    Article5Page,
    Article6Page,
    Article7Page,
    Article8Page,
    Article9Page,
    Article10Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
