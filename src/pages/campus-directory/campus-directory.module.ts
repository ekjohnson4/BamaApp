import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampusDirectory } from './campus-directory';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    CampusDirectory,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(CampusDirectory)

  ],
})
export class CampusDirectoryModule {}
