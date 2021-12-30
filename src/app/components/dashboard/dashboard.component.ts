import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserProfilePictureService } from 'src/app/services/user-profile-picture.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  firstname: string;
  lastname: string;
  profilePictureURL: string;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private loginService: LoginService, private userProfilePictureService: UserProfilePictureService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getUserProfilePicture()
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getUserInfo(): void {
    this.loginService.getUserData().subscribe(data => {
      this.firstname = data["firstname"];
      this.lastname = data["lastname"]
    })
  }
  getUserProfilePicture(): void{
    this.userProfilePictureService.getProfileImageURL().subscribe(data => {
      this.profilePictureURL = data[data.length - 1]['profilePictureURL']
      console.log(this.profilePictureURL)
    })
  }
}
