import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation'; 
import { CentreReservationService } from '../centre-reservation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centre-reservation',
  templateUrl: './centre-reservation.component.html',
  styleUrls: ['./centre-reservation.component.scss']
})

export class CentreReservationComponent implements OnInit{

constructor (
  private route: ActivatedRoute,
  private service: CentreReservationService,
  ) {}

clientReservation: Reservation = {
  idCentre: 0, 
  nom: '',
  prenom: '',
  mail: '',
  telephone: '',
  date: '',
  heure: '',
  validationVaccin: false
};

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.clientReservation.idCentre = id;
}


  onSubmit() {
    
    console.log(this.clientReservation);
    this.service.createReservation(this.clientReservation).subscribe(resultResa => {
      this.clientReservation = resultResa;
    });
  }
}

