import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the DisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class DisciplinaPage {

  disciplina = {
    nome: '',
    data: ''
  }
  data = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {

  }
  insere(d){
   d['data'] = this.data.getDate() + "/" + this.data.getMonth() + "/" + this.data.getFullYear();
    this.http.post('http://localhost:3000/disciplina', d)
      .subscribe(resposta => {
          this.navCtrl.setRoot(PrincipalPage);
      }, (erro) => {
        console.log(erro);
      }
    );
  }

}
