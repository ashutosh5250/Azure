import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PipeClass } from "./pipeComponent";
import { PowerPipeClass } from "./PowerPipe";
@NgModule({
   imports:[BrowserModule,FormsModule,CommonModule],
   declarations:[PipeClass,PowerPipeClass],
   bootstrap:[PipeClass]
})
export class PipeModule{

}