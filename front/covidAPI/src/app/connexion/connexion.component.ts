
import { Component } from '@angular/core';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent{


  model = { username: '', password: '' };

  constructor(private service: ConnexionService) {}

   
  onSubmit() {
    this.service.login(this.model.username, this.model.password)
      .subscribe(
        (data) => {
          console.log('Login successful', data);
  
          // Ajoutez ici la logique pour rediriger l'utilisateur ou effectuer d'autres actions après une authentification réussie.
        },
        (error) => {
          console.error('Login failed', error);
          this.clearForm();
          // Ajoutez ici la logique pour gérer les erreurs d'authentification.
        }
      );
  }

    clearForm(){
      this.model.username = '';
      this.model.password = '';
    };
}







