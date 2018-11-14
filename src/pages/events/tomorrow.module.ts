import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tomorrow } from './events';

@NgModule({
  declarations: [
    Tomorrow,
  ],
  imports: [
    IonicPageModule.forChild(Tomorrow),
  ],
})
export class TomorrowModule {}
