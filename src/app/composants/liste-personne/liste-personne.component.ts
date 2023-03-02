import { Component } from '@angular/core';
import {Personne} from "../../models/Personne";
import {DonneesService} from "../../services/donnees.service";

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent {

  public personnes : Personne[];
  constructor ( private svc : DonneesService) {
      this.personnes = svc.personnes;
  }
}



