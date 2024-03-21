import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoListaPage } from './aluno-lista';

@NgModule({
  declarations: [
    AlunoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoListaPage),
  ],
})
export class AlunoListaPageModule {}
