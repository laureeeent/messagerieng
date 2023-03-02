import { Component } from '@angular/core';
import {Message} from "../../models/Message";
import {Personne} from "../../models/Personne";


@Component({
  selector: 'app-message_affichage',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

    public messages : Message[];
    public personnes : Personne[];

    constructor() {
      this.messages = [];
      let Martin : Personne = new Personne("Martin", "Jean", "martinjean@gmail.com");
      let Valentin : Personne = new Personne("Valentin", "De Faria Rodrigues", "valentindefariarodrigues@gmail.com");
      this.personnes = [Martin, Valentin];

      let msg1 : Message = new Message(Martin, Valentin, "tu pues de la gueule.");
      let msg2 : Message = new Message(Valentin, Martin, "Connard.");

      this.messages.push(msg1);
      this.messages.push(msg2);
    }
}
