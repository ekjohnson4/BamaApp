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
import { Class1 } from '../pages/student/subpages/grades/classes/class1/class1';
import { Class2 } from '../pages/student/subpages/grades/classes/class2/class2';
import { Class3 } from '../pages/student/subpages/grades/classes/class3/class3';
import { Class4 } from '../pages/student/subpages/grades/classes/class4/class4';
import { MyTickets } from '../pages/student/subpages/my-tickets/my-tickets';
import { Transfer } from '../pages/student/subpages/my-tickets/transfer/transfer';
import { Donate } from '../pages/student/subpages/my-tickets/donate/donate';
import { Schedule } from '../pages/student/subpages/schedule/schedule';
import { CourseCatalog } from '../pages/course-catalog/course-catalog';
import { Emergency } from '../pages/emergency/emergency';
import { Transportation } from '../pages/transportation/transportation';
import { CampusDirectory } from '../pages/campus-directory/campus-directory';
import { Laundry } from '../pages/laundry/laundry';
import { Events } from '../pages/events/events';
import { Links } from '../pages/links/links';
import { Today } from '../pages/events/today';
import { Tomorrow } from '../pages/events/tomorrow';
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
import { Burke } from '../pages/laundry/burke';
import { DiningDollars } from '../pages/student/subpages/action-card/dining-dollars';
import { BamaCash } from '../pages/student/subpages/action-card/bama-cash';
import { GlobalvarsProvider } from '../providers/globalvars/globalvars';

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
    Class1,
    Class2,
    Class3,
    Class4,
    MyTickets,
    Transfer,
    Donate,
    Schedule,
    Today,
    Tomorrow,
    Article4Page,
    Article5Page,
    Article6Page,
    Article7Page,
    Article8Page,
    Article9Page,
    Article10Page,
    Burke,
    DiningDollars,
    BamaCash
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
    Today,
    Tomorrow,
    ActionCard,
    Grades,
    Class1,
    Class2,
    Class3,
    Class4,
    MyTickets,
    Transfer,
    Donate,
    Schedule,
    Article4Page,
    Article5Page,
    Article6Page,
    Article7Page,
    Article8Page,
    Article9Page,
    Article10Page,
    Burke,
    DiningDollars,
    BamaCash
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalvarsProvider
  ]
})

export class AppModule {}
