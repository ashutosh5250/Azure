import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DependancyClass } from "./DependancyComponent";
import { Operations } from "./Services";
@NgModule({
   imports:[BrowserModule,CommonModule,FormsModule],
   declarations:[DependancyClass],
   bootstrap:[DependancyClass],
   providers:[Operations]
})
export class MainModuleClass{

}