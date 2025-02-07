import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lenders } from 'src/app/classes/Lenders';
import { Medicines } from 'src/app/classes/Medicines';
import { LoginServiceService } from 'src/app/sevices/login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
UserName:Lenders=new Lenders()
Login:Array<Medicines>=new Array<Medicines>()
constructor( public rLogin:LoginServiceService, public route:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

Enter() {

  this.route.navigate(['/Home']); // נתיב הקומפוננטה החדשה
  this.UserName = new Lenders()
}
}