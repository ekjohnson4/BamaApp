import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content, Events } from 'ionic-angular';
import { ClassInfo } from '../class-info/class-info'

@IonicPage()
@Component({
  selector: 'page-department-info',
  templateUrl: 'department-info.html',
})
export class DepartmentInfo {
  @ViewChild(Content) content: Content;
  departments: string;
  courses: Array<{title: string, credits: string, CRN: string, startDate: string, endDate: string, scheduleDate: string, scheduleTime: string, building: string, room: string, instructor: string}>;
  classList = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController, public eventMenu: Events) {
    this.departments = navParams.get('data');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DepartmentInfo');
    this.initializeCourses();
    this.determineClasses();
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

    console.log('DepartmentInfo back button pressed');
    this.navCtrl.pop();
  }
  
  initializeCourses() {
    this.courses = [
      { title: 'AAST 201: Intro African Amer Study', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'AAST 249: African American Literature', credits: '3', CRN: '18473', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Ten Hoor Hall', room: '351', instructor: 'John Doe' },
      { title: 'AAST 302: The Black Church', credits: '3', CRN: '19032', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '116', instructor: 'John Doe' },
      { title: 'AAST 319: 19th Century Black History', credits: '3', CRN: '78362', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '217', instructor: 'John Doe' },
      { title: 'AC 148: Intro to the Accounting Major', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'AC 184: LIFT Student Worker', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'AC 188: LIFT Class Leader - Honors', credits: '3', CRN: '18473', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Ten Hoor Hall', room: '351', instructor: 'John Doe' },
      { title: 'AC 210: Intro To Accounting', credits: '3', CRN: '19032', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '116', instructor: 'John Doe' },
      { title: 'AEL 520: Leadership for Communities', credits: '3', CRN: '78362', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '217', instructor: 'John Doe' },
      { title: 'AEL 521: Leadership for Improvement', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'AEL 522: Teaching and Learning', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'AEL 523: Human Resource Development', credits: '3', CRN: '18473', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Ten Hoor Hall', room: '351', instructor: 'John Doe' },
      { title: 'BA 520: Print I Elements Printing', credits: '3', CRN: '19032', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '116', instructor: 'John Doe' },
      { title: 'BA 522: Printing III Print/Publ', credits: '3', CRN: '78362', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '217', instructor: 'John Doe' },
      { title: 'BA 530: Binding I: Elements Of Binding', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'BA 532: Binding III: Intrmdt Bndng', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'BCE 101: Freshman Compass: UA', credits: '3', CRN: '18473', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Ten Hoor Hall', room: '351', instructor: 'John Doe' },
      { title: 'BCE 301: Introduction To Counseling', credits: '3', CRN: '19032', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '116', instructor: 'John Doe' },
      { title: 'BCE 511: Principles Of Guidance', credits: '3', CRN: '78362', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '217', instructor: 'John Doe' },
      { title: 'BCE 512: Counseling Theory Proc', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'CS 100: CS I for Majors', credits: '3', CRN: '11897', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'North Lawn Hall', room: '2006', instructor: 'John Doe' },
      { title: 'CS 101: CS II for Majors', credits: '3', CRN: '18473', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Ten Hoor Hall', room: '351', instructor: 'John Doe' },
      { title: 'CS 200: Software Design & Engineering', credits: '3', CRN: '19032', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'TR', scheduleTime: '9:30 am - 10:45 am', building: 'Farrah Hall', room: '116', instructor: 'John Doe' },
      { title: 'CS 201: Data Structures and Algorithms', credits: '3', CRN: '78362', startDate: '8/22/18', endDate: '12/07/18', scheduleDate: 'MWF', scheduleTime: '8:00 am - 8:50 am', building: 'Lloyd Hall', room: '217', instructor: 'John Doe' }
    ];
  }
  
  determineClasses() {
    this.classList = [];
    var chosenDept = this.departments.split(" ")[0];
    console.log('chosen department is ' + chosenDept);
    for(let i in this.courses) {
      var courseTitle = this.courses[i].title.split(" ")[0];
      if(courseTitle === chosenDept) {
        this.classList.push(this.courses[i]);
      }
    }
  }
  
  onCancel(ev) { 
    // Reset the field
    ev.target.value = '';
  }
  
  // taken from ionic website
  getClasses(ev: any) {
   // Reset items back to all of the items
   this.determineClasses();

   // set val to the value of the searchbar
   const val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.classList = this.classList.filter((item) => {
       return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }
 
 openClassInfo(item) {
   var classData = this.classList[0];
   
   for(let i in this.classList) {
     if(item.title === this.classList[i].title) {
       classData = this.classList[i];
       break;
     }
   }
   let loading = this.loadingCtrl.create({
   content: 'Loading...',
   dismissOnPageChange: true
   });
   loading.present();
   
   this.navCtrl.push(ClassInfo, {
     data: classData
   });
 }
}