import { DisciplinaAtualizaPage } from './../pages/disciplina-atualiza/disciplina-atualiza';
import { DisciplinaListaPage } from './../pages/disciplina-lista/disciplina-lista';
import { DisciplinaPage } from './../pages/disciplina/disciplina';
import { CursoAtualizaPage } from './../pages/curso-atualiza/curso-atualiza';
import { CursoListaPage } from './../pages/curso-lista/curso-lista';
import { CursoPage } from './../pages/curso/curso';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CriaPage } from '../pages/cria/cria';
import { PrincipalPage } from '../pages/principal/principal';
import { AlunoPage } from '../pages/aluno/aluno';
import { AlunoListaPage } from '../pages/aluno-lista/aluno-lista';
import { AlunoAtualizaPage } from '../pages/aluno-atualiza/aluno-atualiza';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CriaPage,
    PrincipalPage,
    AlunoPage,
    AlunoListaPage,
    AlunoAtualizaPage,
    CursoPage,
    CursoListaPage,
    CursoAtualizaPage,
    DisciplinaPage,
    DisciplinaListaPage,
    DisciplinaAtualizaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CriaPage,
    PrincipalPage,
    AlunoPage,
    AlunoListaPage,
    AlunoAtualizaPage,
    CursoPage,
    CursoListaPage,
    CursoAtualizaPage,
    DisciplinaPage,
    DisciplinaListaPage,
    DisciplinaAtualizaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
