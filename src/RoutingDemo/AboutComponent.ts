import { Component } from "@angular/core";
@Component({
   selector:"app-root",
   standalone:false,
   template:`
    <h2>About Us Page</h2>
    <div>
      <div>
         <a routerLink="company">Company</a>
         &nbsp;
         <a routerLink="staff">Staff</a>
      </div>
      <div style="height: auto; width:100%">
          <router-outlet></router-outlet>
      </div>
    </div>
   `
})
export class AboutClass{
   
}