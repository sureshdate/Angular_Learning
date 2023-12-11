import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  originalEmployees:Employee[]=[
    new Employee(101,"John",5000),
    new Employee(102,"smith",12000),
    new Employee(103,"Nick",6000)
  ]

  employees:Employee[]=[];
  
  constructor(){
    this.employees=this.originalEmployees;
  }
  
  str:string="";
  sortcolumn="empId";
  order=1;


  onSearchClick(){
    this.employees=this.originalEmployees.filter((emp)=>{
      return
      emp.empName.toLowerCase().indexOf(this.str.toLowerCase())>=0;
    })
  }


  onSortClick(){
    this.employees=this.originalEmployees.sort((emp1:Employee,emp2:Employee):any=>
    {
      var n=0;
      if(this.sortcolumn=="empId"){
        return
        (emp1[this.sortcolumn]-emp2[this.sortcolumn])*this.order;
      }
      else if(this.sortcolumn=="empName"){
        (emp1[this.sortcolumn].charCodeAt(0)-(emp2[this.sortcolumn].charCodeAt(0)*this.order,
      }
      else{
        return
        (emp1[this.sortcolumn]-emp2[this.sortcolumn])*this.order;
      }
    })
  }
}
