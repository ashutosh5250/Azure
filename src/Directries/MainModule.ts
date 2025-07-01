import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { InputChildClass } from "./InputChild";
import { InputParentClass } from "./InputParent";
@NgModule({
   imports:[BrowserModule,FormsModule,CommonModule],
   declarations:[InputChildClass,InputParentClass],
   bootstrap:[InputParentClass]
})
export class MainClass{
   
}