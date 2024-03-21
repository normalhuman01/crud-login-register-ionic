import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the CursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {

  curso = {
    nome: '',
    data: '',
    perido: ''
  }
  data = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoPage');
  }
  insere(c){
   c['data'] = this.data.getDate() + "/" + this.data.getMonth() + "/" + this.data.getFullYear();
    this.http.post('http://localhost:3000/curso', c)
      .subscribe(resposta => {
          this.navCtrl.setRoot(PrincipalPage);
      }, (erro) => {
        console.log(erro);
      }
    );
  }
}
