import { CursoAtualizaPage } from './../curso-atualiza/curso-atualiza';
import { CursoPage } from './../curso/curso';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CursoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso-lista',
  templateUrl: 'curso-lista.html',
})
export class CursoListaPage {

  curso: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.http.get('http://localhost:3000/curso')
      .subscribe(resposta => {
          this.curso = resposta;
      }, (erro) => {
        console.log(erro);
      }
    );
  }
  chamaInsere(){
    this.navCtrl.push(CursoPage);
  }

  atualizaCurso(id){
    this.navCtrl.push(CursoAtualizaPage, {'cursoAtual': id});
  }

  removeCurso(id){
    this.http.delete('http://localhost:3000/curso/'+id)
    .subscribe(retorno => {
      this.ionViewDidLoad();
      console.log("Curso removido");
    },
    (erro) => {
      console.log(erro);
    }
    );
  }
}
