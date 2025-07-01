import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MainComponentClass } from "./MainComponent";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { dashboardClass } from "./Dashboard";
import { specializationClass } from "./Specialization";
import { cityClass } from "./City";
import { stateClass } from "./State";
import { qualificationClass } from "./Qualification";
import { LoginClass } from "./Login/LoginComponent";
import { CommonClass } from "./CommonComponent";

const MyRoutes:any=[
   {path:'',component:LoginClass},
   {path:'main',component:MainComponentClass, children:[
      {path:"dashboard",component:dashboardClass},
      {path:"specialization",component:specializationClass},
      {path:"city",component:cityClass},
      {path:"state",component:stateClass},
      {path:"qualification",component:qualificationClass}
   ]}
]
@NgModule({
   imports:[BrowserModule,FormsModule,CommonModule,RouterModule.forRoot(MyRoutes)],
   declarations:[MainComponentClass,dashboardClass,specializationClass,cityClass,stateClass,qualificationClass,LoginClass,CommonClass],
   bootstrap:[CommonClass]
})
export class MainModuleClass{
   
}