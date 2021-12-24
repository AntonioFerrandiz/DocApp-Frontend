import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/shared/shared.module';
import { OverviewComponent } from './profile/overview/overview.component';
import { NewPatientComponent } from './patients/new-patient/new-patient.component';

import { NgChartsModule } from 'ng2-charts';
import { MedicalHistoryComponent } from './patients/medical-history/medical-history.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MedicalHistoryFormComponent } from './patients/medical-history/medical-history-form/medical-history-form.component';


@NgModule({
  declarations: [
    PatientsComponent,
    ProfileComponent,
    NewPatientComponent,
    EditProfileComponent,
    LandingComponent,
    OverviewComponent,
    MedicalHistoryComponent,
    MedicalHistoryFormComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,NgChartsModule, MatDialogModule
  ],
  entryComponents: [MedicalHistoryFormComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class DashboardModule { }
