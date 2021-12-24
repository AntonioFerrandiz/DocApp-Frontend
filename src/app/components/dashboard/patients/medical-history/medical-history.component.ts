import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MedicalHistoryFormComponent } from './medical-history-form/medical-history-form.component';
import { MedicalHistoryService } from 'src/app/services/medical-history.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  patientID: number;
  patientData: any = [];
  constructor(private patientService: PatientService,
    private medicalHistoryService: MedicalHistoryService,
    private aRoute: ActivatedRoute, public dialog: MatDialog) {
    this.patientID = +this.aRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getPatient();
    this.getMedicalHistory();
  }

  openDialog() {
    const dialogRef = this.dialog.open(MedicalHistoryFormComponent, {
      data: {
        firstname: this.patientData.firstname,
        patientID: this.patientData.id,
      },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Agregar comprobante de paciente.
  getPatient(): void {
    this.patientService.GetPatient(this.patientID).subscribe(data => {
      this.patientData = data;
      console.log(this.patientData);
    })
  }

  getMedicalHistory(): void {
    this.medicalHistoryService.getMedicalHistory(this.patientID).subscribe(data => {
      console.log(data);
    })
  }
}
