import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserProfilePictureService } from 'src/app/services/user-profile-picture.service';

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
  profilePictureURL: string;
  constructor(private loginService: LoginService,
    private userProfilePictureService: UserProfilePictureService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.getUserProfilePicture();
  }
  getUserInfo(): void{
    this.loginService.getUserData().subscribe(data =>{
      this.firstname = data["firstname"];
      this.lastname = data["lastname"]
    })
  }
  getUserProfilePicture(): void{
    this.userProfilePictureService.getProfileImageURL().subscribe(data => {
      this.profilePictureURL = data[data.length - 1]['profilePictureURL']
    })
  }
}
