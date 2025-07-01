import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
   selector:"app-root",
   standalone:false,
   template:`
   <h2>Contact Us Page</h2>
   <h2>{{Rno}}</h2>
   <h2>{{name}}</h2>
   `
})
export class ContactClass{
   Rno:any;
   name:any;
   constructor(private Rt:ActivatedRoute){
     this.Rt.params.subscribe(e=>{
      this.Rno = e['id'];
      this.name = e['name'];
     })
   }

}