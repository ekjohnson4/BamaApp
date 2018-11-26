import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampusDirectory } from './campus-directory';
@NgModule({
  declarations: [
    CampusDirectory,

  ],
  imports: [
    IonicPageModule.forChild(CampusDirectory)
  ],
})
export class CampusDirectoryModule {}
