import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassInfo } from './class-info';

@NgModule({
  declarations: [
    ClassInfo,
  ],
  imports: [
    IonicPageModule.forChild(ClassInfo),
  ],
})
export class ClassInfoModule {}