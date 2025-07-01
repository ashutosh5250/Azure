import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Student } from "./StudentModel";
@Component({
   selector:"app-root",
   templateUrl:"studentModel.html",
   styleUrl:"student.css",
   imports:[CommonModule,FormsModule]
})
export class StudentModelClass{
   st = new Student(0,"",0,0,0,0,0,"");
   index:number=-1;
   SubState:boolean=false;
   UpState:boolean=true;
   StudentData:Student[]=[]
   calculation(s:Student){
      this.st.Total = s.English+s.Hindi+s.Maths;
      this.st.Percentage = Number((this.st.Total/3).toFixed(2));
      if(this.st.Percentage>40){
        this.st.Result = "Pass";
      }else{
        this.st.Result="Fail";
      }
    }
    AddStudent(s:Student){
        
      this.StudentData.push(s);
      this.ClearData();
      console.log(this.StudentData);
     }
     ClearData(){
      this.st = new Student(0,"",0,0,0,0,0,"");
      this.SubState = false;
      this.UpState = true;
     }
     ViewData(s:Student,i:number){
      this.index = i;
      this.st = s
      this.SubState = true;
      this.UpState = false;
      }
      Delete(i:any){
         this.StudentData.splice(i,1);
        }

        UpdateStudent(s:Student){
         this.StudentData[this.index] = s;
         this.ClearData();
         }
}