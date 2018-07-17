import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class WomenService{
  c:Array<any>;
  data:BehaviorSubject<any> = new BehaviorSubject(this.c);
  constructor(private http:HttpClient){      
     
   
  }
  

  getData(sizes):Observable<any>{

      return this.http.get('http://127.0.0.1:3000/women',{
        params: {
          size: '' + sizes,
      
        }
      });
  
  }

}
