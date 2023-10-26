import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {

  Nom : string = "";
  Prenom : string = "";
  Adresse : string = "";
  CP : string = "";
  Ville : string = "";
  Tel : string = "";
  Email : string = "";
  Civilite : string = "";
  Login : string = "";
  Password : string = "";
  Pays : string = "";

  Informations : boolean = false;
  afficher()
  {
    return this.Informations = true;
  }


}
