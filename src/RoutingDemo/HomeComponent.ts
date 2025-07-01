import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
   selector:"app-root",
   standalone:false,
   templateUrl:"Home.html"
})
export class HomeClass{
   Rno:any;
   Name:any;
   constructor(private rt:Router){
     
   }
   AddData(r:any,n:any){
      this.rt.navigateByUrl("/Services/"+r+"/"+n)
   }
}