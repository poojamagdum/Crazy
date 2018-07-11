import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  localUser = {
    username: '',
    password: '',
    fullname: '',
    mobile: '',
    gender: ''
  }
  hideLogin: string = 'none';
  hideCont: string = '';
  hidePass: string = 'none';
  hideLoginBlk: string = ''
  hideLoginmodal: string = 'none';
  hideform1: string = '';
  hideform2: string = 'none';
  hideLoginLink:string='Login';

  i: number;
  data: Array<any> = [];
  toggle:number=1;
  constructor(private _loginservice: LoginService, private _router: Router, private http: HttpClient) {

  }
  login() {
    this._loginservice.getData(this.localUser).subscribe(d => {
      if (d.found == "true") {
        console.log("login success");
        this.toggle=0;
        this.hideLoginLink='';
      }
      else {

        console.log("login failure");
      }
    })
  }
  signUp() {
    this._loginservice.putData(this.localUser).subscribe(res => {
      console.log("from post" + res);
      this.hideLoginmodal = "none";
    })
  }
 
  ngOnInit() {
  }
}
