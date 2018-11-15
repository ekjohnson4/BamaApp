import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Burke } from './burke';

@NgModule({
  declarations: [
    Burke,
  ],
  imports: [
    IonicPageModule.forChild(Burke),
  ],
})
export class BurkeModule {}
