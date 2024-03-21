import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlunoPage } from '../aluno/aluno';
import { AlunoAtualizaPage } from '../aluno-atualiza/aluno-atualiza';

/**
 * Generated class for the AlunoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno-lista',
  templateUrl: 'aluno-lista.html',
})
export class AlunoListaPage {
  alunos: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:3000/aluno')
      .subscribe(resposta => {
          this.alunos = resposta;
      }, (erro) => {
        console.log(erro);
      }
    );
  }

  chamaInsere(){
    this.navCtrl.push(AlunoPage);
  }

  atualizaAluno(id){
    this.navCtrl.push(AlunoAtualizaPage, {'alunoAtual': id});
  }

  removeAluno(ra){
    this.http.delete('http://localhost:3000/aluno/'+ra)
    .subscribe(retorno => {
      this.ionViewDidLoad();
      console.log("Aluno removido");
    },
    (erro) => {
      console.log(erro);
    }
    );
  }
}
