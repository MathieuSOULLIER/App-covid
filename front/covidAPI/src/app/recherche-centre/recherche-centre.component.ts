// recherche-centre.component.ts
import { Component } from '@angular/core';
import { RechercheService } from '../recherche.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recherche-centre',
  templateUrl: './recherche-centre.component.html',
  styleUrls: ['./recherche-centre.component.scss']
})
export class RechercheCentreComponent {
  faSearchIcon = faMagnifyingGlass;
  ville: string = '';

  constructor(private rechercheService: RechercheService) { }

  rechercher() {
    this.rechercheService.mettreAJourVilleRecherchee(this.ville);
    this.clearSearch();
  }

  
  clearSearch() {
    this.ville = '';
  }
}
