import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Emergency } from './emergency';

@NgModule({
  declarations: [
    Emergency,
  ],
  imports: [
    IonicPageModule.forChild(Emergency),
  ],
})
export class EmergencyModule {}
