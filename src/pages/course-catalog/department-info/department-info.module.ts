import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepartmentInfo } from './department-info';

@NgModule({
  declarations: [
    DepartmentInfo,
  ],
  imports: [
    IonicPageModule.forChild(DepartmentInfo),
  ],
})
export class DepartmentInfoModule {}