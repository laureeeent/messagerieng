import { Component } from '@angular/core';
import {Personne} from "../../models/Personne";

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent {
    public personnes : Personne[];

    constructor() {
      let Martin : Personne = new Personne("Martin", "Jean", "martinjean@gmail.com");
      let Valentin : Personne = new Personne("Valentin", "De Faria Rodrigues", "valentindefariarodrigues@gmail.com");
      this.personnes = [Martin, Valentin];
    }

}



