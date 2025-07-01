// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { firstComponent } from './Demo/FirstComponent';
// import { Second } from './Demo/SecondeComponent';
// import { BindingClass } from './Demo/BindingComponent';
// import { studentClass } from './Student/StudentComponent';
// import { StudentModelClass } from './Student/StudentModelComponent';
// bootstrapApplication(StudentModelClass)
//   .catch((err) => console.error(err));
// import { ProjectModuleClass } from "./ProjectModule/Project";
// import { platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// platformBrowserDynamic().bootstrapModule(ProjectModuleClass).catch(e=>console.log(e))

import { platformBrowser } from "@angular/platform-browser"

// import { MainModuleClass } from "./DependancyDemo/MainModule";
// import { PipeModule } from "./PipeDemo/PipeModule";
// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
// platformBrowserDynamic().bootstrapModule(PipeModule).catch(e=>console.log(e))

// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// import { MainModuleClass } from "./RoutingDemo/MainModule";
// platformBrowserDynamic().bootstrapModule(MainModuleClass).catch(e=>console.log(e));

// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// import { MainModuleClass } from "./LayzyLoading/MainModule";
// platformBrowserDynamic().bootstrapModule(MainModuleClass).catch(e=>console.log(e))

// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// import { MainModuleClass } from "./RouterWithLogin/MainModule";

// platformBrowserDynamic().bootstrapModule(MainModuleClass).catch(e=>console.log(e))

// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
// import { MainClass } from "./ReactiveForms/MainModule";
// platformBrowserDynamic().bootstrapModule(MainClass).catch(e=>console.log(e));
import { platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { MainClass } from "./Directries/MainModule";
platformBrowserDynamic().bootstrapModule(MainClass).catch(e=>console.log(e))