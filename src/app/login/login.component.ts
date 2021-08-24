import { Component, OnInit } from '@angular/core';
// import { error } from '@angular/compiler/src/util'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Users } from './login.model';
import { ThrowStmt } from '@angular/compiler';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myimg:string ="assets/images/iStock-1153657433.jpg"
  user = new Users();
  msg = ''
  userssid:number;
  
  constructor(private _service : LoginService,private _router : Router) { }

  ngOnInit() {
    
    this.userssid=this.getuserId(this.user)
    console.log(this.userssid);
  }

  loginUser(){
    this._service.LoginUserFromRemote(this.user).subscribe(
      data => {
      
        console.log("response recieved");      
        this._router.navigate(['/apicall'])


        
      },
      error => {
        console.log("error");
         this.msg="Bad credentials, please enter valid username and password!";
      }
    );
  }

  getuserId(user)
  {
    return user.id;

  }
  

}