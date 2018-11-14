import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tomorrow } from './tomorrow';

@NgModule({
  declarations: [
    Tomorrow,
  ],
  imports: [
    IonicPageModule.forChild(Tomorrow),
  ],
})
export class TomorrowModule {}
