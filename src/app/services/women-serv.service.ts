import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class WomenService{
  d:any
    data:BehaviorSubject<Object> = new BehaviorSubject({});
    constructor(private http:HttpClient) { 
      (this.http.get('./../assets/json/women.json')).subscribe(d=>{
        this.d=d; 
        
      })
    console.log(this.d)
    }
    getData():any{
        return this.data;
    }
  }
