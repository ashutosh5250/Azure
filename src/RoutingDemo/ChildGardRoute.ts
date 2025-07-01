import { Injectable } from "@angular/core";
import {  CanActivateChild } from "@angular/router";
@Injectable()
export class ChildGardRouteClass implements CanActivateChild{
   canActivateChild():any {
      return false;
   }
}