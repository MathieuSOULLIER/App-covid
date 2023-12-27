import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private httpClient: HttpClient) { }

  getAllVaccinationCenter(ville: string) : Observable<VaccinationCenter[]>{
   return this.httpClient.get<VaccinationCenter[]>("/api/centres/rechercher",{
   params:{
    "ville": ville
   }
  });
  }
}
