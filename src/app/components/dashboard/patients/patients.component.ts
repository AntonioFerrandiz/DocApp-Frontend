import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  showListPatients = false;
  showNewPatient = false;
  patients: any = [];
  constructor(public dialog: MatDialog, private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(): void{
    this.patientService.GetListPatientsByUser().subscribe(data =>{
      this.patients = data;
      console.log(this.patients);
    })
  }
}
