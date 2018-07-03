import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Observable } from "rxjs/Observable";
import {Http, Response, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class LoginService{
  c:Array<any>;
  data:BehaviorSubject<any> = new BehaviorSubject(this.c);
  constructor(private http:HttpClient){      
     this.http.get('../assets/json/loginDetails.json').subscribe(d=>{
        this.data.next(d);
      })
   
  }
  

  getData():Observable<any>{
      return this.data.asObservable()
  }
  putData(localUser){
   /*  console.log("inside");
    this.http.post('../assets/json/loginDetails.json',{
      localUser
    }); */
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(localUser);
    this.data.subscribe(d=>{
      d.push(localUser);
console.log(d)
    })

    this.http.post('../assets/json/loginDetails.json', this.data );
       
  }



 
  }
