import { Component } from "@angular/core";
@Component({
   selector:"app-root",
   template:`
   <div class="container-fluid">
       <h2>Parent Component</h2>
       <!-- <child-root Rno="3" Name="ashutosh"></child-root>
       <child-root Rno="4" Name="pallavi"></child-root> -->
       <child-root [js]='[{name:"ashutosh",maths:34,marathi:45,english:43}]'></child-root>
   </div>
   `,
   standalone:false

})
export class InputParentClass{

}