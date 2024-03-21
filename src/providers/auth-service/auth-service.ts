import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

let apiUrl = 'http://localhost:3000/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }
}
