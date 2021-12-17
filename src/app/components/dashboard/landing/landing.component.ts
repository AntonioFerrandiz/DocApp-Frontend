import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  firstname: string;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUserInfo()
  }
  getUserInfo(): void{
    this.loginService.getUserData().subscribe(data =>{
      console.log(data);
      this.firstname = data["firstname"];
      console.log(this.firstname)
    })
  }
}
