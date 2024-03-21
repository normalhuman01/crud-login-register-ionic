import { DisciplinaListaPage } from './../disciplina-lista/disciplina-lista';
import { CursoListaPage } from './../curso-lista/curso-lista';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AlunoPage } from '../aluno/aluno';
import { AlunoListaPage } from '../aluno-lista/aluno-lista';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  abreAluno(){
      this.navCtrl.push(AlunoListaPage);
  }
  abreCurso(){
    this.navCtrl.push(CursoListaPage);
  }
  abreDisciplina(){
      this.navCtrl.push(DisciplinaListaPage);
  }
  sair() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
