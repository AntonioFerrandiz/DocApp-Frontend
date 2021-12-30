import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MedicalHistoryFormComponent } from './medical-history-form/medical-history-form.component';
import { MedicalHistoryService } from 'src/app/services/medical-history.service';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalHistory } from 'src/app/models/medicalHistory.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort'
@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  patientID: number;
  patientData: any = [];
  medicalHistoryPatient: any = [];
  displayedColumns = ['age', 'timePeriod', 'heigth', 'weigth', 'details', 'prescribedMedication', 'dateCreated', 'actions']
  dataSource = new MatTableDataSource<MedicalHistory>();
  constructor(private patientService: PatientService,
    private medicalHistoryService: MedicalHistoryService,
    private aRoute: ActivatedRoute, public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer) {
    this.patientID = +this.aRoute.snapshot.paramMap.get("id");
  }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.getPatient();
    this.getMedicalHistory();
    this.dataSource.sort = this.sort;
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
      this.dataSource = data;
      console.log(this.dataSource)
    }, error =>{
      console.log('Errorrrrrrr',error)
    })
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
