import { Component } from '@angular/core';
import { Lenders } from 'src/app/classes/Lenders';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
constructor(){}
UserName:Lenders=new Lenders()

}
