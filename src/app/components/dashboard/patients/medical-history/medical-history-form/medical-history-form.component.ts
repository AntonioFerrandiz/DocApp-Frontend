import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicalHistory } from 'src/app/models/medicalHistory.model';
import { MedicalHistoryService } from 'src/app/services/medical-history.service';

@Component({
  selector: 'app-medical-history-form',
  templateUrl: './medical-history-form.component.html',
  styleUrls: ['./medical-history-form.component.css']
})
export class MedicalHistoryFormComponent implements OnInit {
  newMedicalHistory: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { firstname: string, patientID: number },
    private medicalHistoryService: MedicalHistoryService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {
    this.newMedicalHistory = this.fb.group({
      weight: [''],
      height: [''],
      age: [''],
      timePeriod: [''],
      observations: ['', Validators.required],
      prescribedMedication: ['']
    })
  }

  ngOnInit(): void { }
  addMedicalHistory(): void {
    const medicalHistory: MedicalHistory = {
      patientId: this.data.patientID,
      weight: this.newMedicalHistory.value.weight,
      height: this.newMedicalHistory.value.height,
      age: this.newMedicalHistory.value.age,
      timePeriod: this.newMedicalHistory.value.timePeriod,
      details: this.newMedicalHistory.value.observations,
      prescribedMedication: this.newMedicalHistory.value.prescribedMedication,
    }
    console.log(medicalHistory)
    this.medicalHistoryService.saveMedicalHistory(medicalHistory).subscribe(data => {
      this.toastr.info(`New medical history added to ${this.data.firstname}`, 'Yay!')
      console.log(data);
    }, error => {
      console.log(error);
      this.toastr.error(error.error.message, 'Error');
    })
  }
}