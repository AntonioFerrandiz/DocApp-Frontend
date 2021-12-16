import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  disabled = false;
  firstname:  string;
  lastname: string;
  username: string
  identityDocument: string;
  biography: string;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }
  getUserInfo(): void{
    this.loginService.getUserData().subscribe(data =>{
      this.firstname = data["firstname"];
      this.lastname = data["lastname"];
      this.username = data["username"];
      this.identityDocument = data["identityDocument"]
    })
  }
}
