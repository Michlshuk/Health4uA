import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  @ViewChild('loginForm') loginForm!: ElementRef;
  @ViewChild('signupForm') signupForm!: ElementRef;
  @ViewChild('loginBtn') loginBtn!: ElementRef;
  @ViewChild('signupBtn') signupBtn!: ElementRef;
  @ViewChild('signupLink') signupLink!: ElementRef;
  @ViewChild('loginText') loginText!: ElementRef;
  @ViewChild('signupText') signupText!: ElementRef;
  ngAfterViewInit() {
    this.signupBtn.nativeElement.addEventListener('click', () => {
      this.loginForm.nativeElement.style.marginLeft = '-50%';
      this.loginText.nativeElement.style.marginLeft = '-50%';
    });

    this.loginBtn.nativeElement.addEventListener('click', () => {
      this.loginForm.nativeElement.style.marginLeft = '0%';
      this.loginText.nativeElement.style.marginLeft = '0%';
    });

    this.signupLink.nativeElement.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this.signupBtn.nativeElement.click();
    });
  }
}











 