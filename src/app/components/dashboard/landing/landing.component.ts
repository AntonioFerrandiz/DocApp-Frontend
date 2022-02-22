import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PatientService } from 'src/app/services/patient.service';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  firstname: string;
  totalPatients: number;
  patientsMale: number;
  patientsFemale: number;
  gendersList: any = [];
  myAppUrl: string;
  myApiUrl: string;

  constructor(private loginService: LoginService,
    private patientService: PatientService) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Patient';
  }

  ngOnInit(): void {
    this.getUserInfo()
    this.getTotalPatients();
    this.getTotalPatientsMale()
    this.getTotalPatientsFemale();
  }

  


  getUserInfo(): void {
    this.loginService.getUserData().subscribe(data => {
      this.firstname = data["firstname"];
    })
  }
  getTotalPatients(): void {
    this.patientService.GetNumberOfPatients().subscribe(data => {
      this.totalPatients = data;
    })
  }

  getTotalPatientsMale():void{
    this.patientService.GetNumberOfMalePatients().subscribe(data =>{
      this.patientsMale = data;
      console.log(this.patientsMale)
    })
  }
  getTotalPatientsFemale(){
    this.patientService.GetNumberOfFemalePatients().subscribe(data =>{
    })
  }
  // Pie
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Female'], ['Male']],
    datasets: [{
      data: [4, 5]
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];
}
