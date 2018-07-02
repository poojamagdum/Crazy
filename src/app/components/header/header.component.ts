import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){

    $(document).ready(function(){
     $("#loginpage").click(function(){
      $("#form1").show();
      $("#form2").hide();
     });
      $("#login").click(function(){
      $("#form2").hide();
      $("#form1").show();
      });
      $("#signup").click(function(){
        $("#form1").hide();
        $("#form2").show();
        });
        $("#signuppage").click(function(){
          $("#form2").show();
          $("#form1").hide();
        });
    });
}
 
}
