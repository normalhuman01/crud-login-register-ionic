import { DisciplinaAtualizaPage } from './../disciplina-atualiza/disciplina-atualiza';
import { DisciplinaPage } from './../disciplina/disciplina';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DisciplinaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina-lista',
  templateUrl: 'disciplina-lista.html',
})
export class DisciplinaListaPage {

  disciplina: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:3000/disciplina')
      .subscribe(resposta => {
          this.disciplina = resposta;
      }, (erro) => {
        console.log(erro);
      }
    );
  }
  chamaInsere(){
    this.navCtrl.push(DisciplinaPage);
  }

  atualizaDisciplina(id){
    this.navCtrl.push(DisciplinaAtualizaPage, {'disciplinaAtual': id});
  }

  removeDisciplina(id){
    this.http.delete('http://localhost:3000/disciplina/'+id)
    .subscribe(retorno => {
      this.ionViewDidLoad();
      console.log("Disciplina removida");
    },
    (erro) => {
      console.log(erro);
    }
    );
  }

}
