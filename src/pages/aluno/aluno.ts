import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PrincipalPage } from '../principal/principal';
/**
 * Generated class for the AlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html',
})
export class AlunoPage {

  aluno = {
    ra: '',
    nome: '',
    endereco: '',
    rg: ''
  }

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public http: HttpClient ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoPage');
  }

  insere(aluno){
    this.http.post('http://localhost:3000/aluno', aluno)
      .subscribe(resposta => {
          this.navCtrl.setRoot(PrincipalPage);
      }, (erro) => {
        console.log(erro);
      }
    );
  }

}
