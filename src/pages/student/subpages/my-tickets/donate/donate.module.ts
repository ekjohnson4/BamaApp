import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Donate } from './donate';

@NgModule({
  declarations: [
    Donate,
  ],
  imports: [
    IonicPageModule.forChild(Donate),
  ],
})
export class DonateModule {}
