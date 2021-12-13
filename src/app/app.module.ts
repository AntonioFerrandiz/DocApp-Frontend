import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/welcome/home/home.component';


import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


import { NavbarComponent } from './components/welcome/navbar/navbar.component';
import { LoginComponent } from './components/welcome/login/login.component';
import { RegisterComponent } from './components/welcome/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientsComponent } from './components/dashboard/patients/patients.component';
import { AboutComponent } from './components/welcome/home/about/about.component';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    SharedModule,
    MatButtonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatListModule, MatFormFieldModule, MatIconModule, MatRadioModule, MatTableModule, MatSidenavModule, MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
