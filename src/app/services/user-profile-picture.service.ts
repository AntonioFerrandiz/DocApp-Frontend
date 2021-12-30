import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfilePicture } from '../models/user-profile-picture.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfilePictureService {
  myAppUrl: string;
  myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/UserProfilePicture';
   }
   saveUserProfilePicture(userProfilePicture: UserProfilePicture): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, userProfilePicture);
   }
   getProfileImageURL(): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + '/GetProfileImageURL');
   }
}
