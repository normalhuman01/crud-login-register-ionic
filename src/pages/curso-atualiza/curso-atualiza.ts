import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PrincipalPage } from '../principal/principal';
import { identifierModuleUrl } from '@angular/compiler';

/**
 * Generated class for the CursoAtualizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso-atualiza',
  templateUrl: 'curso-atualiza.html',
})
export class CursoAtualizaPage {

  curso = {
    nome: '',
    data: '',
    perido: ''
  }

  id = this.navParams.get('CursoAtual');
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:3000/curso/'+this.id)
      .subscribe(resposta => {
          this.curso['nome'] = resposta[0]['nome']
          this.curso['data'] = resposta[0]['data']
          this.curso['perido'] = resposta[0]['perido']
          this.curso['id'] = resposta[0]['_id']
      }, (erro) => {
        console.log(erro);
      }
    );
  }
  atualiza(c){
    this.http.put('http://localhost:3000/curso/'+c['id'], c)
      .subscribe(resposta => {
        this.navCtrl.setRoot(PrincipalPage);
      }, (erro) => {
        console.log(erro);
      });
  }
}
