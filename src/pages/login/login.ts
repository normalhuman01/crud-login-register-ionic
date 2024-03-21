import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CriaPage } from '../cria/cria';
import { PrincipalPage } from '../principal/principal';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {"password": "", "name": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthServiceProvider, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  criar(){
    this.navCtrl.push(CriaPage);
  }
  entrar(){
    console.log(this.userData);
    if(this.userData.name && this.userData.password){
     this.authService.postData(this.userData, "user").then((result) =>{
     this.responseData = result;
     console.log(this.responseData);
     if(this.responseData.userData){
      localStorage.setItem('userData', JSON.stringify(this.responseData) )
      this.navCtrl.setRoot(PrincipalPage);
   }
   else{
     this.presentToast("Por favor, dê um nome e senha válidos");
   }



     }, (err) => {
       //Connection failed message
     });
    }
    else{
     this.presentToast("Dê nome e senha");
    }

   }


   presentToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }


}
