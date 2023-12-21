import { Component, Inject,  } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username:string="";
  password:string="";
  msg:string="";

  constructor(@Inject(LoginService) private loginService:LoginService){

  }

  checkLogin(){
    if(this.loginService.checkUnameAndPwd(this.username,this.password)==true){
      this.msg="Login Successfull...";
    }
    else{
      this.msg="invalid credentials...";
      
    }
  }
}








