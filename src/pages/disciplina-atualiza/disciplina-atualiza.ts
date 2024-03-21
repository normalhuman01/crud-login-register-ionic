import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the DisciplinaAtualizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina-atualiza',
  templateUrl: 'disciplina-atualiza.html',
})
export class DisciplinaAtualizaPage {

  disciplina = {
    nome: '',
    data: ''
  }

  id = this.navParams.get('CursoAtual');
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:3000/disciplina/'+this.id)
      .subscribe(resposta => {
          this.disciplina['nome'] = resposta[0]['nome']
          this.disciplina['data'] = resposta[0]['data']
          this.disciplina['id'] = resposta[0]['_id']
      }, (erro) => {
        console.log(erro);
      }
    );
  }
  atualiza(c){
    this.http.put('http://localhost:3000/disciplina/'+c['id'], c)
      .subscribe(resposta => {
        this.navCtrl.setRoot(PrincipalPage);
      }, (erro) => {
        console.log(erro);
      });
  }

}
