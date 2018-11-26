import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DepartmentInfo } from './department-info/department-info';

@IonicPage()
@Component({
  selector: 'page-course-catalog',
  templateUrl: 'course-catalog.html',
})
export class CourseCatalog {
  @ViewChild(Content) content: Content;
  searchQuery: string = '';
  departments: string[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseCatalog');
    this.initializeDepartments();
  }
  
  openClasses(department) {
    var departmentData = this.departments[0];
    
    for(let i in this.departments) {
      if(department === this.departments[i]) {
        departmentData = this.departments[i];
        break;
      }
    }
    let loading = this.loadingCtrl.create({
    content: 'Loading...',
    dismissOnPageChange: true
    });
    loading.present();
    
    this.navCtrl.push(DepartmentInfo, {
      data: departmentData
    });
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
  
  initializeDepartments() {
    this.departments = [
      'AAST - African American Studies',
      'AC - Culverhouse Sch Accountancy',
      'AEL - Educational Leadership',
      'BA - Book Arts',
      'BCE - Counselor Education',
      'CS - Computer Science'
    ];
  }
  
  onCancel(ev) { 
    // Reset the field
    ev.target.value = '';
  }
  
  // taken from ionic website
  getDepartments(ev: any) {
   // Reset items back to all of the items
   this.initializeDepartments();

   // set val to the value of the searchbar
   const val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.departments = this.departments.filter((item) => {
       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }
}
