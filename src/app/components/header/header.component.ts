import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  localUser={
    username:'',
    password:'',
    fullname:'',
    mobile:'',
    gender:''
  }
  hideLogin:string='none';
  hideCont:string='';
  hidePass:string='none';
  hideLoginBlk:string=''
  hideLoginmodal:string='none';
  hideform1:string='';
  hideform2:string='none';
  

  i:number;
    data:Array<any>=[];
    
  constructor(private _loginservice:LoginService,private _router:Router) { 
 
  }
  login(){
        this._loginservice.getData().subscribe(d=>{
        this.data=d;
    
        
      })
      console.log(this.localUser.password);
      for( this.i=0;this.i<this.data.length;this.i++){
            console.log(this.data[this.i]);
            if(this.data[this.i].username==this.localUser.username){
                this._router.navigate(['/women-page']);
            }
      }
      this.hideLoginBlk="none"
  }
  signUp(){
    this._loginservice.putData(this.localUser)

  }
  ngOnInit() {
  }

  ngAfterViewInit(){

    // $(document).ready(function(){
    //  $("#loginpage").click(function(){
    //   $("#form1").show();
    //   $("#form2").hide();
     

    //  });
    
    //   $("#login").click(function(){
    //   $("#form2").hide();
    //   $("#form1").show();
    //   });
    //   $("#signup").click(function(){
    //     $("#form1").hide();
    //     $("#form2").show();
    //     });
    //     $("#signuppage").click(function(){
    //       $("#form2").show();
    //       $("#form1").hide();
    //     });
    // });
}
 
}
