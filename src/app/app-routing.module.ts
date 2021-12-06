import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/dashboard/patients/patients.component';
import { HomeComponent } from './components/welcome/home/home.component';
import { LoginComponent } from './components/welcome/login/login.component';
import { RegisterComponent } from './components/welcome/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: WelcomeComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'about', loadChildren: () => import('./components/welcome/home/about/about.module')
          .then(x => x.AboutModule)
      }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    loadChildren: () => import('./components/dashboard/dashboard.module')
      .then(x => x.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
