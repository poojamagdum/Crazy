import { WomenService } from './../../services/women-serv.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
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
@Input() childvalue: string;
private sub:any;
sizes:any;

constructor(private ws:WomenService,private activatedRoute:ActivatedRoute) { 
 
    if(this.data!=undefined)
    console.log("inside constructor")
    this.changeImage();
  }
  
  
  
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(parameters =>{
     
      this.sizes=parameters['id'];
      this.ws.getData(this.sizes).subscribe(d=>{
        console.log("inside nginit",d)
        if(d!=undefined)
        this.data=d;
      })
   })

   
  
  }
  changeImage(){
    
    console.log(this.data.filter(i=>i.prize>700))
   }
  ngAfterViewInit(){console.log(this.data);console.log(this.childvalue)
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
