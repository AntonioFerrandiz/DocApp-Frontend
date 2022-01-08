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
  edit = false;
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
  deletePatient(patientID: number):void{
    if(confirm('Are you sure to remove this patient from your list?')){
      this.patientService.DeletePatient(patientID).subscribe(data => {
        this.toastr.success('Patient successfully removed from the list', 'Ok')
        this.getPatients();
      }, error => {
        this.toastr.error('There was an error trying to remove the patient from the list, try again.', 'Ups...')
        console.log(error)
      })
    }
  }
}
