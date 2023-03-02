import { Component } from '@angular/core';
import {Personne} from "../personnes-actives/Personne";

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent {

}

let martin : Personne = new Personne("Jean", "Martin", "jeanmartin@gmail.com");
let valentin : Personne = new Personne("De Faria Rodiguez", "Valentin","valentindefariarodriguez@gmail.com");

let liste = document.getElementById("liste_personnes_actives");

let MartinLI = document.createElement("li");
let ValentinLI = document.createElement("li");
let Martin_text = document.createElement("p");

Martin_text.innerText = martin.toString();
MartinLI.appendChild(Martin_text);
ValentinLI.innerText = valentin.toString();
martin.afficher();

  if (liste != null) {
  console.log("Salut");
  liste.appendChild(MartinLI);
  liste.appendChild(ValentinLI);
}



