import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MedicalHistoryComponent } from './patients/medical-history/medical-history.component';
import { NewPatientComponent } from './patients/new-patient/new-patient.component';
import { PatientsComponent } from './patients/patients.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { OverviewComponent } from './profile/overview/overview.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  {path: 'patients', component: PatientsComponent},
  {path: 'new-patient', component: NewPatientComponent},
  {path:'patients/medical-history/:id', component: MedicalHistoryComponent},
  {path: 'profile', component: ProfileComponent, children: [
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'overview', component: OverviewComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
