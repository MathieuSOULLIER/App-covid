import { Injectable } from '@angular/core';
import { Reservation } from './reservation'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreReservationService {

  constructor(private httpClient: HttpClient) { }

  createReservation(resa: Reservation) : Observable<Reservation>{
   return this.httpClient.post<Reservation>("/api/reservations/ajouter", resa, {headers: {'Content-Type': 'application/json'}});
}
}
