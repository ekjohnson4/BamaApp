import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiningDollars } from './dining-dollars';

@NgModule({
  declarations: [
    DiningDollars,
  ],
  imports: [
    IonicPageModule.forChild(DiningDollars),
  ],
})
export class DiningDollarsModule {}