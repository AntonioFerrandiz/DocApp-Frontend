import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicalHistory } from '../models/medicalHistory.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {
  myAppUrl: string;
  myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/MedicalHistory';
   }
   saveMedicalHistory(medicalHistory: MedicalHistory): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, medicalHistory);
   }
   getMedicalHistory(patientID:number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + '/GetMedicalHistory/ ' + `${patientID}`);
   }
}
