import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  myAppUrl: string;
  myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Patient';
   }
   savePatient(patient: Patient): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, patient);
   }
   GetListPatientsByUser(): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + '/GetListPatientsByUser');
   }
}
