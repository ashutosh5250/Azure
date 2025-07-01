import { Component } from "@angular/core";
@Component({
   selector:"app-root",
   template:`<h1>Welcome to Angular</h1>`,
   styles:[`h1{color:blue;font-size: 2em; text-align: center}`],
})
export class firstComponent{
   
   constructor(){
      console.log("First Component Initialized")
   }
}