import { Component } from '@angular/core';
import {Personne} from "../../models/Personne";
import {Message} from "../../models/Message";
import {DonneesService} from "../../services/donnees.service";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent {

  public auteur : Personne;
  public destinataire : Personne;
  public contenu : string;
  public msg : Message;
  nouveauMessageForm: any;

  constructor(private svc : DonneesService) {
    this.auteur = new Personne();
    this.destinataire = new Personne();
    this.contenu = "";
    this.msg = new Message(this.auteur, this.destinataire, "");
  }

  ajouterMsg(value: any) {
    console.log(value.auteur);
    console.log(value.contenu);
    let auteur = new Personne(value.auteur);
    let destinataire = new Personne();
    let nouveau_message = new Message(auteur, destinataire, value.contenu);
    this.svc.pushPersonneMessage(auteur, nouveau_message);
  }
}
