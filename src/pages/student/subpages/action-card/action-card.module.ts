import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionCard } from './action-card';

@NgModule({
  declarations: [
    ActionCard,
  ],
  imports: [
    IonicPageModule.forChild(ActionCard),
  ],
})
export class ActionCardModule {}
