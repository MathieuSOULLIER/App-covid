// vaccination-center-list.component.ts
import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { RechercheService } from '../recherche.service';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent implements OnInit {
  iconHospital = faHospital;
  iconClock = faClock;
  centres!: VaccinationCenter[];
  selected?: VaccinationCenter;

  constructor(
    private service: VaccinationService,
    private rechercheService: RechercheService
  ) { }

  ngOnInit(): void {
    // Abonnez-vous au changement de ville recherchée
    this.rechercheService.villeRecherchee$.subscribe(ville => {
      this.service.getAllVaccinationCenter(ville).subscribe(resultCentres => {
        this.centres = resultCentres;
      });
    });
  }
  

  onDeleted(centre: VaccinationCenter) {
    delete this.selected;
    this.centres.splice(this.centres.indexOf(centre), 1);
  }

  isSpecialCenter(centre: VaccinationCenter) {
    return centre.ville == "Nancy";
  }

  selectCenter(centre: VaccinationCenter) {
    this.selected = centre;
  }
}
