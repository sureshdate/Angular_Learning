import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  username:string="";
  password:string="";
  confirmPassword:string="";
  gender:string="";
  country:string="";
  licenceAgreement:boolean=false;
  
  msg:string="";

  RegisterClick(){
    this.msg = "Username:"+this.username
    +"<br/>Password:"+this.password
    +"<br/> Confirm_Password:"+this.confirmPassword
    +"<br/> Gender:"+this.gender
    +"<br/> country:"+this.country
    +"<br/>Licenece Agreement:"+this.licenceAgreement
  }

}






































