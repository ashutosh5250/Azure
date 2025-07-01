import { Component, input } from "@angular/core";
import { Input } from "@angular/core";
@Component({
   selector:"child-root",
   template:`
   <div class="container-fluid">
       <h2>{{Rno}}</h2>
       <h2>{{Name}}</h2>
       <h2>{{js[0].name}}</h2>
        <h2>{{js[0].maths}}</h2>
         <h2>{{js[0].marathi}}</h2>
          <h2>{{js[0].english}}</h2>
   </div>
   `,
   standalone:false
})
export class InputChildClass{
@Input()
Rno:any;
@Input()
Name:any;
@Input()
js:any=[{name:"",maths:0,marathi:0,english:0}];
}