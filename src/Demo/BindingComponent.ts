import {FormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Component} from "@angular/core";
@Component({
   selector:"app-root",
   templateUrl:"Binding.html",
   imports:[FormsModule,CommonModule],
})
export class BindingClass{
   num:any;
   num1:any;
   num2:any;
   result:any;
   val:any;
   Addititon(x:any,y:any){
     this.result = x+y;
   }
  changeval(){
   if(this.val){
      this.val = false;
   }else{
      this.val = true;
   }
  }
}