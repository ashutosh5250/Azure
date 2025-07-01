import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
   selector:"app-root",
   standalone:false,
   template:`
     <h2>Services Page</h2>
     <h2>{{st.id}}</h2>
     <h2>{{st.name}}</h2>
   `
})
export class ServicesClass{
   st:any;
   constructor(private rt:ActivatedRoute) {
    this.rt.params.subscribe(e=>this.st=e)
   }
}