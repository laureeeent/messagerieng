import { Component } from '@angular/core';
import {Personne} from "../personnes-actives/Personne";

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent {
    public personnes : Personne[];
    public persString : string[];

    constructor() {
      let Martin : Personne = new Personne("Martin", "Jean", "martinjean@gmail.com");
      let Valentin : Personne = new Personne("Valentin", "De Faria Rodrigues", "valentindefariarodrigues@gmail.com");
      this.personnes = [Martin, Valentin];
      this.persString = [];
      this.personnes.forEach( (pers) => {
        this.persString.push(pers.toString());
        console.log(pers.toString())
      })
    }

}



