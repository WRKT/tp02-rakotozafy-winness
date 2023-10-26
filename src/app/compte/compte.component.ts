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

  NomAfficher : string = "";
  PrenomAfficher : string = "";
  AdresseAfficher : string = "";
  CPAfficher : string = "";
  VilleAfficher : string = "";
  TelAfficher : string = "";
  EmailAfficher : string = "";
  CiviliteAfficher : string = "";
  LoginAfficher : string = "";
  PasswordAfficher : string = "";
  PaysAfficher : string = "";

  afficher()
  {
    this.NomAfficher = this.Nom;
    this.PrenomAfficher = this.Prenom;
    this.AdresseAfficher = this.Adresse;
    this.CPAfficher = this.CP;
    this.VilleAfficher = this.Ville;
    this.TelAfficher = this.Tel;
    this.EmailAfficher = this.Email;
    this.CiviliteAfficher = this.Civilite;
    this.LoginAfficher = this.Login;
    this.PasswordAfficher = this.Password;
    this.PaysAfficher = this.Pays;
  }


}
