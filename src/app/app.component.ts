import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname:string="suresh";
  lname:string="date";
  age:number=27;
  gender:string="male";
  country:string="Uk"
  isEmployed:boolean=true;
  
  
  handSubmitButton(){
    this.fname="pooja";
    this.lname="date";
    this.age=25;
    this.gender="female";
    this.country="Us";
    this.isEmployed=false;
}
}
