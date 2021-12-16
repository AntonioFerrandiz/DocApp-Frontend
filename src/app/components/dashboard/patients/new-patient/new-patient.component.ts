import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  newPatient: FormGroup;
  constructor(private fb: FormBuilder,
    private patientService: PatientService,
    private toastr: ToastrService,
    private router: Router) {
    this.newPatient = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phonenumber: ['', [Validators.required, Validators.maxLength(9)]],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void { }
  addPatient(): void{
    const patient: Patient = {
      firstName: this.newPatient.value.firstname,
      lastName: this.newPatient.value.lastname,
      phonenumber: this.newPatient.value.phonenumber,
      gender: this.newPatient.value.gender,
    }
    this.patientService.savePatient(patient).subscribe(data =>{
      this.toastr.info('Patient successfully added','Yay!');
      this.router.navigate(['dashboard/patients'])
    }, error => {
      this.toastr.error(error.error.message, 'Error');
    })
  }

}
