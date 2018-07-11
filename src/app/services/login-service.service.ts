import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";


@Injectable()
export class LoginService {
  c: Array<any>;
  data: BehaviorSubject<any> = new BehaviorSubject(this.c);
  constructor(private http: HttpClient) {
  }
  getData(localUser): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/ping', {
      params: {
        username: '' + localUser.username,
        password: '' + localUser.password
      }
    });
  }
  putData(localUser): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/ping', JSON.stringify(localUser), {
      headers: headers
    });

  }
}
