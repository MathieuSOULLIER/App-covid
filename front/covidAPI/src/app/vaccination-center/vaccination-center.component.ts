import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationcentreComponent  {

 @Input() centre!: VaccinationCenter;
 @Output() deleted = new EventEmitter<VaccinationCenter>();

 constructor(){ }

delete(){
  this.deleted.emit(this.centre);
}

 clearNom(){
  this.centre.nom = "";
 }

 isNameNotEmpty(){
  return this.centre.nom.length>0;
 }

 isSpecialcentre(centre: VaccinationCenter){
  return this.centre.nom == "Centre A";
 }
}
