import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MainClass } from "./MainComponent";
import { TeacherModuleClass } from "./Teacher/TeacherModule";
import { StudentModuleClass } from "./Student/StudentModule";
import { RouterModule } from "@angular/router";
const MyRoutes:any=[
   {path:'student',loadChildren:()=>import("./Student/StudentModule").then(e=>e.StudentModuleClass)},
   {path:'teacher',loadChildren:()=>import("./Teacher/TeacherModule").then(e=>e.TeacherModuleClass)}
]
@NgModule({
   imports:[BrowserModule,CommonModule,FormsModule,RouterModule.forRoot(MyRoutes)],
   declarations:[MainClass],
   bootstrap:[MainClass]
})
export class MainModuleClass{

}