import { Studyclass } from "./StudyComponent";
import { Examclass } from "./ExamComponent";
import { Studentclass } from "./StudentComponent";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
const MyRouts:any =[
   {path:'',component:Studentclass},
   {path:'study',component:Studyclass},
   {path:'exam',component:Examclass}
]
@NgModule({
   imports:[RouterModule.forChild(MyRouts)],
   declarations:[Studentclass,Examclass,Studyclass]
})
export class StudentModuleClass{

}