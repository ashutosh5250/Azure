import { Injectable } from "@angular/core";
@Injectable()
export class Operations{
  Add(n1:number,n2:number){
  var result= n1+n2;
  console.log(n1,n2);
   return result;
  }
  Sub(n1:number,n2:number){
   return n1-n2;
  }
  Multi(n1:number,n2:number){
   return n1*n2;
  }
  devision(n1:number,n2:number){
   return n1/n2;
  }
}