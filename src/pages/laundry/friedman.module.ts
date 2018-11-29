import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Friedman } from './friedman';

@NgModule({
  declarations: [
    Friedman,
  ],
  imports: [
    IonicPageModule.forChild(Friedman),
  ],
})
export class FriedmanModule {}
