import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { CentreReservationComponent } from './centre-reservation/centre-reservation.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path: "centres", component: VaccinationCenterListComponent},
  {path: "reservation/:id", component: CentreReservationComponent},
  {path: "login", component: ConnexionComponent},
  {path: '', redirectTo: '/centres', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
