import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  private villeRechercheeSubject = new BehaviorSubject<string>('');
  villeRecherchee$ = this.villeRechercheeSubject.asObservable();

  constructor() { }

  mettreAJourVilleRecherchee(ville: string) {
    this.villeRechercheeSubject.next(ville);
  }
}
