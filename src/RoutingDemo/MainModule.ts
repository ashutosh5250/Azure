import { BrowserModule } from "@angular/platform-browser";
import {  NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MainClass } from "./MainComponent";
import {  mapToCanActivate, mapToCanActivateChild, RouterModule } from "@angular/router";
import { HomeClass } from "./HomeComponent";
import { AboutClass } from "./AboutComponent";
import { ContactClass } from "./ContactUsComponent";
import { ServicesClass } from "./ServicesComponent";
import { CompanyClass } from "./CompanyComponent";
import { StaffClass } from "./StaffComponent";
import { GardRouteClass } from "./GardRoute";
import { ChildGardRouteClass } from "./ChildGardRoute";

const MyRoutes =[
   {path:"Home",component:HomeClass},
   {path:"About-Us", component:AboutClass, canActivate:[GardRouteClass] ,canActivateChild:[ChildGardRouteClass],
      children:[{path:"company",component:CompanyClass},{path:"staff",component:StaffClass}]},
   {path:"Contact/:id/:name", component:ContactClass},
   {path:"Services/:id/:name",component:ServicesClass}
]
@NgModule({
   imports:[BrowserModule,CommonModule,FormsModule,RouterModule.forRoot(MyRoutes)],
   declarations:[MainClass,HomeClass,AboutClass,ContactClass,ServicesClass,CompanyClass,StaffClass],
   bootstrap:[MainClass],
   providers:[GardRouteClass,ChildGardRouteClass]
})
export class MainModuleClass{
   
}