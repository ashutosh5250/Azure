 import { BrowserModule } from "@angular/platform-browser";
 import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { formClass } from "./formComponent";
 @NgModule({
   imports:[BrowserModule,ReactiveFormsModule],
   declarations:[formClass],
   bootstrap:[formClass]
 })
export  class MainClass{

}