import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserProfilePicture } from 'src/app/models/user-profile-picture.model';
import { LoginService } from 'src/app/services/login.service';
import { UserProfilePictureService } from 'src/app/services/user-profile-picture.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  newProfileImage: FormGroup;
  disabled = false;
  userID: number;
  firstname: string;
  lastname: string;
  username: string
  identityDocument: string;
  biography: string;
  constructor(private loginService: LoginService,
    private fb: FormBuilder,
    private userProfilePictureService: UserProfilePictureService,
    private toastr: ToastrService) {
    this.newProfileImage = this.fb.group({
      userProfilePictureURL: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getUserProfilePicture();
  }
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }
  getUserInfo(): void {
    this.loginService.getUserData().subscribe(data => {
      this.firstname = data["firstname"];
      this.lastname = data["lastname"];
      this.username = data["username"];
      this.identityDocument = data["identityDocument"]
      this.userID = data["id"]
    })
  }
  addProfileImage(): void {
    const userProfilePicture: UserProfilePicture = {
      userID: this.userID,
      profilePictureURL: this.newProfileImage.value.userProfilePictureURL
    }
    const profilePictureURL = userProfilePicture.profilePictureURL;
    let regex = new RegExp(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)
    let regexTest = regex.test(profilePictureURL)
    if (!regexTest) {
      this.toastr.error('Not supported file type')
    } else {
      this.userProfilePictureService.saveUserProfilePicture(userProfilePicture).subscribe(data => {
        this.toastr.info('uwu?', ' shi')
      }, error => {
        console.log(error);
      })
    }
  }
  getUserProfilePicture(): void {
    this.userProfilePictureService.getProfileImageURL().subscribe(data => {
      console.log(data);
    })
  }
}
