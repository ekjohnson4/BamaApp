import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Grades } from './grades';

@NgModule({
  declarations: [
    Grades,
  ],
  imports: [
    IonicPageModule.forChild(Grades),
  ],
})
export class GradesModule {}
