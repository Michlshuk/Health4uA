import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements AfterViewInit {

  @ViewChild('loginbtn') loginbtn!: ElementRef;
  @ViewChild('userBox') userBox!: ElementRef;
  @ViewChild('closebtn') closebtn!: ElementRef;

  ngAfterViewInit(): void {
    if (this.loginbtn && this.userBox && this.closebtn) {
      this.loginbtn.nativeElement.addEventListener('click', () => this.showUserBox());
      this.closebtn.nativeElement.addEventListener('click', () => this.closeUserBox());
    }
  }

  showUserBox(): void {
    if (this.userBox) {
      this.userBox.nativeElement.style.display = "block";
    }
  }

  closeUserBox(): void {
    if (this.userBox) {
      this.userBox.nativeElement.style.display = "none";
    }
  }
}

