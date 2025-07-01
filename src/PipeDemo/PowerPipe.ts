import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";
@Pipe({
   name:"power",
   standalone:false
})
export class PowerPipeClass implements PipeTransform{
   transform(num1:any,num2:any) {
      var result = Math.pow(num1,num2);
      return result;
   }
}