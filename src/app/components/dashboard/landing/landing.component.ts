import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  firstname: string;
  totalPatients: number;
  gendersList: any = [];
  constructor(private loginService: LoginService,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.getTotalPatients();
    this.getListOfGenders();
  }
  getUserInfo(): void{
    this.loginService.getUserData().subscribe(data =>{
      this.firstname = data["firstname"];
    })
  }
  getTotalPatients():void{
    this.patientService.GetNumberOfPatients().subscribe(data =>{
      this.totalPatients = data;
    })
  }
  getListOfGenders(): void{
    this.patientService.GetListOfGenders().subscribe(data => {
      this.gendersList = data;
      console.log(this.gendersList)
    })
  }
}
