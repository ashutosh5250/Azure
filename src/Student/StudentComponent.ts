import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
   selector:'app-root',
   templateUrl:"student.html",
   styleUrl:"student.css",
   imports:[CommonModule,FormsModule]
})
export class studentClass{
Rno:any;
Name:any;
English:any;
Hindi:any;
Maths:any;
Total:any;
Percentage:any;
Result:any;
StudantData:any=[];
index:any;
SubState:any=false;
UpState:any=true;
 
calculation(English:any,Hindi:any,Maths:any){
  this.Total = English+Hindi+Maths;
  this.Percentage = Number((this.Total/3).toFixed(2));
  if(this.Percentage>40){
    this.Result = "Pass";
  }else{
    this.Result="Fail";
  }
}
AddStudent(r:any,n:any,eg:any,hi:any,ma:any,to:any,pe:any,re:any){
 var st = {"RollNo":r,"Name":n,"English":eg,"Hindi":hi,"Maths":ma,"Total":to,"Percentage":pe,"Result":re};
 this.StudantData.push(st);
 this.ClearData();
 console.log(this.StudantData);
}
ClearData(){
  this.Rno="";
  this.English="";
  this.Hindi="";
  this.Maths="";
  this.Name="";
  this.Percentage="";
  this.Result="";
  this.Total="";
  this.SubState = false;
  this.UpState = true;
}
ViewData(s:any,i:any){
this.index = i;
this.Rno=s.RollNo;
this.English=s.English;
this.Hindi=s.Hindi;
this.Maths=s.Maths;
this.Name=s.Name;
this.Percentage=s.Percentage;
this.Result=s.Result;
this.Total=s.Total;
this.SubState = true;
this.UpState = false;
}
Delete(i:any){
 this.StudantData.splice(i,1);
}
UpdateStudent(r:any,n:any,eg:any,hi:any,ma:any,to:any,pe:any,re:any){
this.StudantData[this.index] = {"RollNo":r,"Name":n,"English":eg,"Hindi":hi,"Maths":ma,"Total":to,"Percentage":pe,"Result":re};
this.ClearData();
}
}