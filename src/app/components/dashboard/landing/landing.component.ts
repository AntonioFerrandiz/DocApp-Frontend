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
    this.getListOfGenders();
    this.getTotalPatientsMale()

  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


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

  getListOfGenders(): void {
    this.patientService.GetListOfGenders().subscribe(data => {
      this.gendersList = data;
      this.patientsFemale = parseInt(this.gendersList[0])

    })
  }
  // async getTotalPatientsMale(): Promise<number> {
  //   const body = await window.fetch(this.myAppUrl + this.myApiUrl + '/GetListOfGenders')
  //   const data = await body.json();
  //   console.log(parseInt(data[1]))
  //   this.patientsMale = parseInt(data[1]);
  //   return parseInt(data[1])
  // }

  getTotalPatientsMale(): number{
    var value:number;
    this.patientService.GetListOfGenders().subscribe( async data =>{
      await this.getCoca(data);
    })
    return value;
  }
  getCoca(num): number{
    this.patientsMale = num
    console.log('x',this.patientsMale);
    return this.patientsMale
  }

  // Pie
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
