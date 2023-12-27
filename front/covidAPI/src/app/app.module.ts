import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinationcentreComponent } from './vaccination-center/vaccination-center.component';
import { FormsModule } from '@angular/forms';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BanderoleComponent } from './banderole/banderole.component';
import { HeaderContainerComponent } from './header-container/header-container.component'; 
import {MatInputModule} from '@angular/material/input';
import { RechercheCentreComponent } from './recherche-centre/recherche-centre.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { CentreReservationComponent } from './centre-reservation/centre-reservation.component';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [
    AppComponent,
    VaccinationcentreComponent,
    VaccinationCenterListComponent,
    HeaderComponent,
    BanderoleComponent,
    HeaderContainerComponent,
    RechercheCentreComponent,
    CurrentLocationComponent,
    CentreReservationComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
