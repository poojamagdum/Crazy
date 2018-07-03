import { WomenService } from './../../services/women-serv.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var $:any;

@Component({
  selector: 'app-women-page',
  templateUrl: './women-page.component.html',
  styleUrls: ['./women-page.component.css']
})
export class WomenPageComponent implements OnInit {
data:Array<any>=[];
hideImg:string='none'
imgOne:string;
  constructor(private ws:WomenService) { 
    this.ws.getData().subscribe(d=>{
      this.data=d;
      
    })
  }
  
  changeImage(){
    
   
  }
  
  ngOnInit() {
   
  }
  ngAfterViewInit(){
    var prev;
        $(document).ready(function(){
          $('img').hover(function(){
             prev= $(this).attr('src')
            var img = $(this).next().attr('src')
           $(this).attr('src',img)
         
          },function(){
            $(this).attr('src',prev)
          })
        })};

}
