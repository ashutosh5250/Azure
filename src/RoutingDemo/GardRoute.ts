import { Injectable } from "@angular/core";
import { CanActivate} from "@angular/router";
@Injectable()
export class GardRouteClass implements CanActivate{
   canActivate():any {
      return true;
   }
}