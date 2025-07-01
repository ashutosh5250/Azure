import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TeacherClass } from "./TeacherComponent";
import { ProfileClass } from "./ProfileComponent";
import { SalaryClass } from "./SalaryComponent";
const MyRouts:any =[
   {path:'',component:TeacherClass},
   {path:'profile', component:ProfileClass},
   {path:'salary', component:SalaryClass}
]
@NgModule({
   imports:[RouterModule.forChild(MyRouts)],
   declarations:[TeacherClass,ProfileClass,SalaryClass]
})
export class TeacherModuleClass{ 

}