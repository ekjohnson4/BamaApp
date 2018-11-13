import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTickets } from './my-tickets';

@NgModule({
  declarations: [
    MyTickets,
  ],
  imports: [
    IonicPageModule.forChild(MyTickets),
  ],
})
export class MyTicketsModule {}
