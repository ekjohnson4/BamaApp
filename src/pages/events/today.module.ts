import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Today } from './today';

@NgModule({
  declarations: [
    Today,
  ],
  imports: [
    IonicPageModule.forChild(Today),
  ],
})
export class TodayModule {}
