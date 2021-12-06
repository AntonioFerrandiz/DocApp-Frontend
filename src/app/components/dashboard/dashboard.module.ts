import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    PatientsComponent,
    ProfileComponent,
    EditProfileComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
