import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoListaPage } from './curso-lista';

@NgModule({
  declarations: [
    CursoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoListaPage),
  ],
})
export class CursoListaPageModule {}
