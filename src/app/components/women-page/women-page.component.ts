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
    if(this.data!=undefined)
    console.log("inside constructor")
    this.changeImage();
  }
  
  
  
  ngOnInit() {
    this.ws.getData().subscribe(d=>{
      console.log("inside nginit",d)
      if(d!=undefined)
      this.data=d;
    })
    
  }
  changeImage(){
    
    console.log(this.data.filter(i=>i.prize>700))
   }
  ngAfterViewInit(){console.log(this.data)
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
