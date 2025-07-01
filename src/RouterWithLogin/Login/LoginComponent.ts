import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
   selector:'app-root',
   templateUrl:'Login.html',
   standalone:false
})
export class LoginClass{
   username:any;
   password:any;
   message:any
   constructor(private rt:Router){
    
   }
   check(n:any,p:any){
      if(n=="ashutosh" && p=="@ask5250"){
        this.message = "Login is Sucessfull";
        this.rt.navigateByUrl("main");
      }else{
         this.message = "Username or Password is invalid Login is Failed";
      }
   }
}