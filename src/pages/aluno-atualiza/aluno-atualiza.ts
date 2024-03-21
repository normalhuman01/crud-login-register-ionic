import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { PrincipalPage } from '../principal/principal';

@IonicPage()
@Component({
  selector: 'page-aluno-atualiza',
  templateUrl: 'aluno-atualiza.html',
})
export class AlunoAtualizaPage {

  aluno = {
    ra: '',
    nome: '',
    endereco: '',
    rg: ''
  }

  id = this.navParams.get('alunoAtual');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:3000/aluno/'+this.id)
      .subscribe(resposta => {
          this.aluno['ra'] = resposta['ra']
          this.aluno['nome'] = resposta['nome']
          this.aluno['endereco'] = resposta['endereco']
          this.aluno['rg'] = resposta['rg']
      }, (erro) => {
        console.log(erro);
      }
    );
  }

  atualiza(aluno){
    this.http.put('http://localhost:3000/aluno/'+this.id, aluno)
      .subscribe(resposta => {
        this.navCtrl.setRoot(PrincipalPage);
      }, (erro) => {
        console.log(erro);
      });
  }

}
