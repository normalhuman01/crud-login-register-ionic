import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisciplinaListaPage } from './disciplina-lista';

@NgModule({
  declarations: [
    DisciplinaListaPage,
  ],
  imports: [
    IonicPageModule.forChild(DisciplinaListaPage),
  ],
})
export class DisciplinaListaPageModule {}
