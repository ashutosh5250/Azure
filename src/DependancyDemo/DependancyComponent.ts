import { Component } from "@angular/core";
import { Operations } from "./Services";
@Component({
   selector:"app-root",
   standalone:false,
   templateUrl:"Dependancy.html"
})
export class DependancyClass{
   num1:number=0;
   num2:number=0;
   Add:any;
   Sub:any;
   Multy:any;
   Division:any;
   constructor(private op:Operations ){

   }
   Calculation(n1:number,n2:number){
 
      this.Add = this.op.Add(n1,n2);
    
      this.Sub = this.op.Sub(n1,n2);
      this.Multy = this.op.Multi(n1,n2);
      this.Division = this.op.devision(n1,n2);
     
   }
}