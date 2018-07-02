import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class WomenService{
  c:Array<any>;
  data:BehaviorSubject<any> = new BehaviorSubject(this.c);
  constructor(private http:HttpClient){      
     this.http.get('../assets/json/women.json').subscribe(d=>{
        this.data.next(d);
      })
   
  }
  

  getData():Observable<any>{
      return this.data.asObservable()
  }
  }
