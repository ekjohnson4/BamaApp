import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Week } from './week';

@NgModule({
  declarations: [
    Week,
  ],
  imports: [
    IonicPageModule.forChild(Week),
  ],
})
export class WeekModule {}
