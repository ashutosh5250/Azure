import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
@Component({
   selector:"app-root",
   imports:[CommonModule],
   templateUrl:"SecondComponent.html"
})
export class Second{
   rno:number = 24;
   name:string="Ashutosh";
   Data:number[] = [1,2,3,4,5];
   Student:{name:string,rno:number}[]=[{name:"ashutosh",rno:1},{name:"snehal",rno:2},{name:"pallavi",rno:3},{name:"prashant",rno:4}]
}