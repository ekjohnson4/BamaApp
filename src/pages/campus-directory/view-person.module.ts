import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPerson } from './view-person';

@NgModule({
  declarations: [
    ViewPerson,
  ],
  imports: [
    IonicPageModule.forChild(ViewPerson),
  ],
})
export class EmergencyModule {}
