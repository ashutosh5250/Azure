import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProjectClass } from "./ProjectComponent";
import { Seconderyclass } from "./secondaryComponent";
@NgModule({
   imports:[BrowserModule,CommonModule,FormsModule],
   declarations:[ProjectClass,Seconderyclass],
   bootstrap:[ProjectClass]
})
export class ProjectModuleClass{
   
}