import { Injectable } from '@angular/core';
// import { Medicines } from '../classes/Medicines';
import { Medicines } from '../classes/Medicines';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
Login:Array<Medicines>=new Array<Medicines>()
  constructor() {

   }
 rLogin:Medicines=new Medicines() 
  }