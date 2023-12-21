import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  city:string="Hyderabad";
  salary:number=75248;
  n:number=0.72;
  currentDate: Date = new Date();
   person:object = {
    firstName: 'adam',
    lastName: 'smith'
};
  
}







