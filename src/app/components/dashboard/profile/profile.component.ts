import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showEditProfile = false;
  showOverview = false;
  firstname: string;
  lastname: string;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }
  getUserInfo(): void{
    this.loginService.getUserData().subscribe(data =>{
      this.firstname = data["firstname"];
      this.lastname = data["lastname"]
    })
  }

}
