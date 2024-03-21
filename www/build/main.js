webpackJsonp([12],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinaAtualizaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DisciplinaAtualizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisciplinaAtualizaPage = /** @class */ (function () {
    function DisciplinaAtualizaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.disciplina = {
            nome: '',
            data: ''
        };
        this.id = this.navParams.get('CursoAtual');
    }
    DisciplinaAtualizaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://localhost:3000/disciplina/' + this.id)
            .subscribe(function (resposta) {
            _this.disciplina['nome'] = resposta[0]['nome'];
            _this.disciplina['data'] = resposta[0]['data'];
            _this.disciplina['id'] = resposta[0]['_id'];
        }, function (erro) {
            console.log(erro);
        });
    };
    DisciplinaAtualizaPage.prototype.atualiza = function (c) {
        var _this = this;
        this.http.put('http://localhost:3000/disciplina/' + c['id'], c)
            .subscribe(function (resposta) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
        }, function (erro) {
            console.log(erro);
        });
    };
    DisciplinaAtualizaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disciplina-atualiza',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/disciplina-atualiza/disciplina-atualiza.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Atualização de Disciplina </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="disciplina.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="atualiza(disciplina)"> Atualizar </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/disciplina-atualiza/disciplina-atualiza.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DisciplinaAtualizaPage);
    return DisciplinaAtualizaPage;
}());

//# sourceMappingURL=disciplina-atualiza.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoAtualizaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlunoAtualizaPage = /** @class */ (function () {
    function AlunoAtualizaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.aluno = {
            ra: '',
            nome: '',
            endereco: '',
            rg: ''
        };
        this.id = this.navParams.get('alunoAtual');
    }
    AlunoAtualizaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://localhost:3000/aluno/' + this.id)
            .subscribe(function (resposta) {
            _this.aluno['ra'] = resposta['ra'];
            _this.aluno['nome'] = resposta['nome'];
            _this.aluno['endereco'] = resposta['endereco'];
            _this.aluno['rg'] = resposta['rg'];
        }, function (erro) {
            console.log(erro);
        });
    };
    AlunoAtualizaPage.prototype.atualiza = function (aluno) {
        var _this = this;
        this.http.put('http://localhost:3000/aluno/' + this.id, aluno)
            .subscribe(function (resposta) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
        }, function (erro) {
            console.log(erro);
        });
    };
    AlunoAtualizaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aluno-atualiza',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/aluno-atualiza/aluno-atualiza.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Atualização de Aluno </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>RA </ion-label>\n      <ion-input type="number" [(ngModel)]="aluno.ra" name="ra"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="aluno.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Endereço</ion-label>\n      <ion-input type="text" [(ngModel)]="aluno.endereco" name="endereco" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>RG</ion-label>\n      <ion-input type="text" [(ngModel)]="aluno.rg" name="rg" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="atualiza(aluno)"> Atualizar </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/aluno-atualiza/aluno-atualiza.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AlunoAtualizaPage);
    return AlunoAtualizaPage;
}());

//# sourceMappingURL=aluno-atualiza.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinaListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disciplina_atualiza_disciplina_atualiza__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disciplina_disciplina__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DisciplinaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisciplinaListaPage = /** @class */ (function () {
    function DisciplinaListaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    DisciplinaListaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://localhost:3000/disciplina')
            .subscribe(function (resposta) {
            _this.disciplina = resposta;
        }, function (erro) {
            console.log(erro);
        });
    };
    DisciplinaListaPage.prototype.chamaInsere = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__disciplina_disciplina__["a" /* DisciplinaPage */]);
    };
    DisciplinaListaPage.prototype.atualizaDisciplina = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__disciplina_atualiza_disciplina_atualiza__["a" /* DisciplinaAtualizaPage */], { 'disciplinaAtual': id });
    };
    DisciplinaListaPage.prototype.removeDisciplina = function (id) {
        var _this = this;
        this.http.delete('http://localhost:3000/disciplina/' + id)
            .subscribe(function (retorno) {
            _this.ionViewDidLoad();
            console.log("Disciplina removida");
        }, function (erro) {
            console.log(erro);
        });
    };
    DisciplinaListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-disciplina-lista',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/disciplina-lista/disciplina-lista.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Lista de disciplinas </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let disciplina of disciplina">\n          <ion-item>\n              <p>Curso: {{disciplina.nome}} </p>\n              <p>Data: {{disciplina.data}}</p>\n          </ion-item>\n          <ion-item-options>\n              <button danger (click)="removeDisciplina(disciplina._id)">\n                  <ion-icon name="trash"></ion-icon>\n                  Remove\n              </button>\n              <button danger (click)="atualizaDisciplina(disciplina)">\n                  <ion-icon name="open"></ion-icon>\n                  Atualiza\n              </button>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n  <button ion-button block (click)="chamaInsere()">\n    Nova Disciplina\n  </button>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/disciplina-lista/disciplina-lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], DisciplinaListaPage);
    return DisciplinaListaPage;
}());

//# sourceMappingURL=disciplina-lista.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisciplinaPage = /** @class */ (function () {
    function DisciplinaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.disciplina = {
            nome: '',
            data: ''
        };
        this.data = new Date();
    }
    DisciplinaPage.prototype.ionViewDidLoad = function () {
    };
    DisciplinaPage.prototype.insere = function (d) {
        var _this = this;
        d['data'] = this.data.getDate() + "/" + this.data.getMonth() + "/" + this.data.getFullYear();
        this.http.post('http://localhost:3000/disciplina', d)
            .subscribe(function (resposta) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
        }, function (erro) {
            console.log(erro);
        });
    };
    DisciplinaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disciplina',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/disciplina/disciplina.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Cadastro de disciplina </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="disciplina.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="insere(disciplina)"> Criar </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/disciplina/disciplina.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DisciplinaPage);
    return DisciplinaPage;
}());

//# sourceMappingURL=disciplina.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curso_atualiza_curso_atualiza__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curso_curso__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CursoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CursoListaPage = /** @class */ (function () {
    function CursoListaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    CursoListaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://localhost:3000/curso')
            .subscribe(function (resposta) {
            _this.curso = resposta;
        }, function (erro) {
            console.log(erro);
        });
    };
    CursoListaPage.prototype.chamaInsere = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__curso_curso__["a" /* CursoPage */]);
    };
    CursoListaPage.prototype.atualizaCurso = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__curso_atualiza_curso_atualiza__["a" /* CursoAtualizaPage */], { 'cursoAtual': id });
    };
    CursoListaPage.prototype.removeCurso = function (id) {
        var _this = this;
        this.http.delete('http://localhost:3000/curso/' + id)
            .subscribe(function (retorno) {
            _this.ionViewDidLoad();
            console.log("Curso removido");
        }, function (erro) {
            console.log(erro);
        });
    };
    CursoListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-curso-lista',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/curso-lista/curso-lista.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Lista de Cursos </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let curso of curso">\n          <ion-item>\n              <p>Curso: {{curso.nome}} </p>\n              <p>Data: {{curso.data}}</p>\n              <p>Periodo: {{curso.perido}}</p>\n          </ion-item>\n          <ion-item-options>\n              <button danger (click)="removeCurso(curso._id)">\n                  <ion-icon name="trash"></ion-icon>\n                  Remove\n              </button>\n              <button danger (click)="atualizaCurso(curso)">\n                  <ion-icon name="open"></ion-icon>\n                  Atualiza\n              </button>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n  <button ion-button block (click)="chamaInsere()">\n    Novo Curso\n  </button>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/curso-lista/curso-lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], CursoListaPage);
    return CursoListaPage;
}());

//# sourceMappingURL=curso-lista.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoAtualizaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CursoAtualizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CursoAtualizaPage = /** @class */ (function () {
    function CursoAtualizaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.curso = {
            nome: '',
            data: '',
            perido: ''
        };
        this.id = this.navParams.get('CursoAtual');
    }
    CursoAtualizaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://localhost:3000/curso/' + this.id)
            .subscribe(function (resposta) {
            _this.curso['nome'] = resposta[0]['nome'];
            _this.curso['data'] = resposta[0]['data'];
            _this.curso['perido'] = resposta[0]['perido'];
            _this.curso['id'] = resposta[0]['_id'];
        }, function (erro) {
            console.log(erro);
        });
    };
    CursoAtualizaPage.prototype.atualiza = function (c) {
        var _this = this;
        this.http.put('http://localhost:3000/curso/' + c['id'], c)
            .subscribe(function (resposta) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
        }, function (erro) {
            console.log(erro);
        });
    };
    CursoAtualizaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-curso-atualiza',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/curso-atualiza/curso-atualiza.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Atualização de Cursos </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="curso.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Periodo</ion-label>\n      <ion-input type="text" [(ngModel)]="curso.perido" name="perido" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="atualiza(curso)"> Atualizar </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/curso-atualiza/curso-atualiza.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CursoAtualizaPage);
    return CursoAtualizaPage;
}());

//# sourceMappingURL=curso-atualiza.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CursoPage = /** @class */ (function () {
    function CursoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.curso = {
            nome: '',
            data: '',
            perido: ''
        };
        this.data = new Date();
    }
    CursoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CursoPage');
    };
    CursoPage.prototype.insere = function (c) {
        var _this = this;
        c['data'] = this.data.getDate() + "/" + this.data.getMonth() + "/" + this.data.getFullYear();
        this.http.post('http://localhost:3000/curso', c)
            .subscribe(function (resposta) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
        }, function (erro) {
            console.log(erro);
        });
    };
    CursoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-curso',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/curso/curso.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Cadastro de Cursos </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="curso.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Periodo</ion-label>\n      <ion-input type="text" [(ngModel)]="curso.perido" name="perido" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="insere(curso)"> Criar </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/curso/curso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CursoPage);
    return CursoPage;
}());

//# sourceMappingURL=curso.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aluno_aluno__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aluno_atualiza_aluno_atualiza__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AlunoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlunoListaPage = /** @class */ (function () {
    function AlunoListaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    AlunoListaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('http://localhost:3000/aluno')
            .subscribe(function (resposta) {
            _this.alunos = resposta;
        }, function (erro) {
            console.log(erro);
        });
    };
    AlunoListaPage.prototype.chamaInsere = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aluno_aluno__["a" /* AlunoPage */]);
    };
    AlunoListaPage.prototype.atualizaAluno = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aluno_atualiza_aluno_atualiza__["a" /* AlunoAtualizaPage */], { 'alunoAtual': id });
    };
    AlunoListaPage.prototype.removeAluno = function (ra) {
        var _this = this;
        this.http.delete('http://localhost:3000/aluno/' + ra)
            .subscribe(function (retorno) {
            _this.ionViewDidLoad();
            console.log("Aluno removido");
        }, function (erro) {
            console.log(erro);
        });
    };
    AlunoListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aluno-lista',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/aluno-lista/aluno-lista.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Lista de alunos </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let aluno of alunos">\n          <ion-item>\n              <p>Ra: {{aluno.ra}} </p>\n              <p>Aluno: {{aluno.nome}}</p>\n              <p>Endreço: {{aluno.endereco}}</p>\n              <p>Rg: {{aluno.rg}}</p>\n          </ion-item>\n          <ion-item-options>\n              <button danger (click)="removeAluno(aluno._id)">\n                  <ion-icon name="trash"></ion-icon> \n                  Remove\n              </button>\n              <button danger (click)="atualizaAluno(aluno._id)">\n                  <ion-icon name="open"></ion-icon> \n                  Atualiza\n              </button>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n  <button ion-button block (click)="chamaInsere()"> \n    Novo aluno \n  </button>\n</ion-content>'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/aluno-lista/aluno-lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AlunoListaPage);
    return AlunoListaPage;
}());

//# sourceMappingURL=aluno-lista.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlunoPage = /** @class */ (function () {
    function AlunoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.aluno = {
            ra: '',
            nome: '',
            endereco: '',
            rg: ''
        };
    }
    AlunoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlunoPage');
    };
    AlunoPage.prototype.insere = function (aluno) {
        var _this = this;
        this.http.post('http://localhost:3000/aluno', aluno)
            .subscribe(function (resposta) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
        }, function (erro) {
            console.log(erro);
        });
    };
    AlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aluno',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/aluno/aluno.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Cadastro de Aluno </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>RA </ion-label>\n      <ion-input type="number" [(ngModel)]="aluno.ra" name="ra"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="aluno.nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Endereço</ion-label>\n      <ion-input type="text" [(ngModel)]="aluno.endereco" name="endereco" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>RG</ion-label>\n      <ion-input type="text" [(ngModel)]="aluno.rg" name="rg" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="insere(aluno)"> Criar </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/aluno/aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AlunoPage);
    return AlunoPage;
}());

//# sourceMappingURL=aluno.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CriaPage = /** @class */ (function () {
    function CriaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.user = {
            nome: '',
            data: '',
            user: '',
            password: ''
        };
    }
    CriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CriaPage');
    };
    CriaPage.prototype.insere = function (u) {
        var _this = this;
        this.http.post('http://localhost:3000/user', u)
            .subscribe(function (resposta) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        }, function (erro) {
            console.log(erro);
        });
    };
    CriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cria',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/cria/cria.html"*/'<!--\n  Generated template for the CriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Cria Usuário </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Name </ion-label>\n      <ion-input type="text" [(ngModel)]="user.nome" name="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="date" [(ngModel)]="user.data" name="data"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>User</ion-label>\n      <ion-input type="text" [(ngModel)]="user.user" name="user"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password" name="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="insere(user)"> Criar </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/cria/cria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], CriaPage);
    return CriaPage;
}());

//# sourceMappingURL=cria.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aluno-atualiza/aluno-atualiza.module": [
		287,
		11
	],
	"../pages/aluno-lista/aluno-lista.module": [
		288,
		10
	],
	"../pages/aluno/aluno.module": [
		289,
		9
	],
	"../pages/cria/cria.module": [
		290,
		8
	],
	"../pages/curso-atualiza/curso-atualiza.module": [
		291,
		7
	],
	"../pages/curso-lista/curso-lista.module": [
		292,
		6
	],
	"../pages/curso/curso.module": [
		293,
		5
	],
	"../pages/disciplina-atualiza/disciplina-atualiza.module": [
		294,
		4
	],
	"../pages/disciplina-lista/disciplina-lista.module": [
		295,
		3
	],
	"../pages/disciplina/disciplina.module": [
		296,
		2
	],
	"../pages/login/login.module": [
		297,
		1
	],
	"../pages/principal/principal.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiUrl = 'http://localhost:3000/user';
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.abreLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sistema Acadêmico\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p align="center">\n    <button ion-button (click)="abreLogin()"> Entrar </button>\n  </p>\n  <p align="center">\n    <ion-icon name="logo-android"></ion-icon>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disciplina_lista_disciplina_lista__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__curso_lista_curso_lista__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aluno_lista_aluno_lista__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    PrincipalPage.prototype.abreAluno = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aluno_lista_aluno_lista__["a" /* AlunoListaPage */]);
    };
    PrincipalPage.prototype.abreCurso = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__curso_lista_curso_lista__["a" /* CursoListaPage */]);
    };
    PrincipalPage.prototype.abreDisciplina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__disciplina_lista_disciplina_lista__["a" /* DisciplinaListaPage */]);
    };
    PrincipalPage.prototype.sair = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/principal/principal.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item (click)="openPage(PrincipalPage)">\n          Home\n        </button>\n        <button ion-item (click)="abreAluno()">\n          Alunos\n        </button>\n        <button ion-item (click)="abreCurso()">\n          Cursos\n        </button>\n        <button ion-item (click)="abreDisciplina()">\n          Disciplinas\n        </button>\n        <button ion-item (click)="sair()">\n          Desconetar\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Menus\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <h2 align="center"> Sistema Acadêmico </h2>\n    <h3 align="center"> Faculdade de Tecnologia de Franca </h3>\n  </ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/principal/principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_disciplina_atualiza_disciplina_atualiza__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_disciplina_lista_disciplina_lista__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_disciplina_disciplina__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_curso_atualiza_curso_atualiza__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_curso_lista_curso_lista__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_curso_curso__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cria_cria__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_principal_principal__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_aluno_aluno__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_aluno_lista_aluno_lista__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_aluno_atualiza_aluno_atualiza__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cria_cria__["a" /* CriaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_aluno_aluno__["a" /* AlunoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_aluno_lista_aluno_lista__["a" /* AlunoListaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_aluno_atualiza_aluno_atualiza__["a" /* AlunoAtualizaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_curso_curso__["a" /* CursoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_curso_lista_curso_lista__["a" /* CursoListaPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_curso_atualiza_curso_atualiza__["a" /* CursoAtualizaPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_disciplina_disciplina__["a" /* DisciplinaPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_disciplina_lista_disciplina_lista__["a" /* DisciplinaListaPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_disciplina_atualiza_disciplina_atualiza__["a" /* DisciplinaAtualizaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aluno-atualiza/aluno-atualiza.module#AlunoAtualizaPageModule', name: 'AlunoAtualizaPage', segment: 'aluno-atualiza', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aluno-lista/aluno-lista.module#AlunoListaPageModule', name: 'AlunoListaPage', segment: 'aluno-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aluno/aluno.module#AlunoPageModule', name: 'AlunoPage', segment: 'aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cria/cria.module#CriaPageModule', name: 'CriaPage', segment: 'cria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/curso-atualiza/curso-atualiza.module#CursoAtualizaPageModule', name: 'CursoAtualizaPage', segment: 'curso-atualiza', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/curso-lista/curso-lista.module#CursoListaPageModule', name: 'CursoListaPage', segment: 'curso-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/curso/curso.module#CursoPageModule', name: 'CursoPage', segment: 'curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disciplina-atualiza/disciplina-atualiza.module#DisciplinaAtualizaPageModule', name: 'DisciplinaAtualizaPage', segment: 'disciplina-atualiza', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disciplina-lista/disciplina-lista.module#DisciplinaListaPageModule', name: 'DisciplinaListaPage', segment: 'disciplina-lista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disciplina/disciplina.module#DisciplinaPageModule', name: 'DisciplinaPage', segment: 'disciplina', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cria_cria__["a" /* CriaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_aluno_aluno__["a" /* AlunoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_aluno_lista_aluno_lista__["a" /* AlunoListaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_aluno_atualiza_aluno_atualiza__["a" /* AlunoAtualizaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_curso_curso__["a" /* CursoPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_curso_lista_curso_lista__["a" /* CursoListaPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_curso_atualiza_curso_atualiza__["a" /* CursoAtualizaPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_disciplina_disciplina__["a" /* DisciplinaPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_disciplina_lista_disciplina_lista__["a" /* DisciplinaListaPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_disciplina_atualiza_disciplina_atualiza__["a" /* DisciplinaAtualizaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cria_cria__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "password": "", "name": "" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.criar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cria_cria__["a" /* CriaPage */]);
    };
    LoginPage.prototype.entrar = function () {
        var _this = this;
        console.log(this.userData);
        if (this.userData.name && this.userData.password) {
            this.authService.postData(this.userData, "user").then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData);
                if (_this.responseData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__principal_principal__["a" /* PrincipalPage */]);
                }
                else {
                    _this.presentToast("Por favor, dê um nome e senha válidos");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.presentToast("Dê nome e senha");
        }
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tela de Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="userData.name" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="userData.password" name="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button (click)="entrar()"> Entrar </button>\n      <button ion-button (click)="criar()"> Criar </button>\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/estudo/fatec/TR2 - ionic  /src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map