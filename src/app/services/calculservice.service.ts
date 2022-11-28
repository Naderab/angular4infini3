import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculserviceService {

  constructor() { }
  getNumberOf(list:any[], critiria:string, value:any){
    return list.filter((o)=>o[critiria]==value).length
  }
}
