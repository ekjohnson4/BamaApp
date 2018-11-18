import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampusEvents } from './events';

@NgModule({
  declarations: [
    CampusEvents,
  ],
  imports: [
    IonicPageModule.forChild(CampusEvents),
  ],
})
export class CampusEventsModule {}
