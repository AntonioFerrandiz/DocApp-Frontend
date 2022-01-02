import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  loading = false;
  showListPatients = false;
  showNewPatient = false;
  patients: any = [];
  constructor(public dialog: MatDialog, private patientService: PatientService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(): void {
    this.loading = true;
    this.patientService.GetListPatientsByUser().subscribe(data => {
      this.loading = false;
      this.patients = data;
      console.log(this.patients);
    }, error => {
      this.toastr.error(error, 'Ups...');
    })
  }
}
