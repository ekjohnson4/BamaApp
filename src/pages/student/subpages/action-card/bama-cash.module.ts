import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BamaCash } from './bama-cash';

@NgModule({
  declarations: [
    BamaCash,
  ],
  imports: [
    IonicPageModule.forChild(BamaCash),
  ],
})
export class BamaCashModule {}