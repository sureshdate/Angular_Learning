import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*//style-directives
 marks:number=70;
 mycolor:string="";

 constructor(){
  if(this.marks>=35){
   this.mycolor="green";
  }
  else{
    this.mycolor="red";
  }*/

 /* //ng class directives
   marks:number=80;
   mycolor:string="";

   constructor(){
    if(this.marks>35){
      this.mycolor="class1";
}
    else{
      this.mycolor="class2";
    }
   }*/
  
   
   /*//ngif directive 
   marks:number=80;
   b:boolean;

   constructor(){
    if(this.marks>=35){
      this.b=true;
    }
    else{
      this.b=false;
    }
   }*/

   /*//ngIf and else directive
   marks:number=20;
   b:boolean;

   constructor(){
    if(this.marks>=35){
      this.b=true;
    }
    else{
      this.b=false;
    }
   }*/
 
   //ng-switch directive
  //  country:string="null";

  //ngFor directive
  //cities:string[]=["new delhi","mumbai","nagpur"];

  //ngFor with object array
  employees:Employee[]=[
    new Employee(101,"john",5000),
    new Employee(102,"smith",5000),
    new Employee(103,"Nick",6900)
  
  ]
  newemployee:Employee=new Employee(0,"",0);

  onInsertClick(){
    this.employees.push(new Employee(this.newemployee.empId,this.newemployee.empName,this.newemployee.salary));
    this.newemployee.empId=0;
    this.newemployee.empName="";
    this.newemployee.salary=0;
  }

  onDeleteClick(index:number){
  if(confirm("Are u sure to delete this emp?")){
    this.employees.splice(index,1);
  }
  }



























































 }


















