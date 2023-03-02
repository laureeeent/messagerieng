import { Component } from '@angular/core';
import {Message} from "../../models/Message";
import {Personne} from "../../models/Personne";
import {DonneesService} from "../../services/donnees.service";


@Component({
  selector: 'app-message_affichage',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

    public messages : Message[];
    public personnes : Personne[];

    constructor(private svcDonnees : DonneesService) {
      this.personnes = svcDonnees.personnes;
      this.messages = svcDonnees.messages;

    }
}
