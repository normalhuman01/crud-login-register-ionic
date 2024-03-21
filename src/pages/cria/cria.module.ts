import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriaPage } from './cria';

@NgModule({
  declarations: [
    CriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriaPage),
  ],
})
export class CriaPageModule {}
