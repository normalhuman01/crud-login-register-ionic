import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cria',
  templateUrl: 'cria.html',
})
export class CriaPage {

  user = {
    nome: '',
    data: '',
    user: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriaPage');
  }
  insere(u){
    this.http.post('http://localhost:3000/user', u)
      .subscribe(resposta => {
          this.navCtrl.setRoot(LoginPage);
      }, (erro) => {
        console.log(erro);
      }
    );
  }
}
