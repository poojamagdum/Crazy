import { WomenService } from './../../services/women-serv.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-women-page',
  templateUrl: './women-page.component.html',
  styleUrls: ['./women-page.component.css']
})
export class WomenPageComponent implements OnInit {
data:Array<any>=[];
  constructor(private ws:WomenService) { 
    this.ws.getData().subscribe(d=>{
      this.data=d;
      
    })
  }
  
  
  ngOnInit() {
   
  }
  

}
