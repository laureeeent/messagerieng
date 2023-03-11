import { Injectable } from '@angular/core';
import {Personne} from "../models/Personne";
import {Message} from "../models/Message";

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  private _personnes : Personne[];
  private _messages : Message[];

  constructor() {
    let Martin : Personne = new Personne("Martin", "Jean", "martinjean@gmail.com");
    let Valentin : Personne = new Personne("Valentin", "De Faria Rodrigues", "valentindefariarodrigues@gmail.com");
    this._personnes = [];
    this._personnes.push(Martin);
    this._personnes.push(Valentin);

    let msg1 : Message = new Message(Martin, Valentin, "tu pues de la gueule.");
    let msg2 : Message = new Message(Valentin, Martin, "Connard.");

    this._messages = [];
    this._messages.push(msg1);
    this._messages.push(msg2);
  }

  get personnes() : Personne[]{
    return this._personnes;
  }

  public isPersonneActive(pers : Personne) : boolean {
    let res : boolean = false;

    for ( let personne of this._personnes ) {
      if (personne.prenom === pers.prenom) {
        res = true;
      }
    }
    return res;
  }

  public pushPersonneMessage(pers : Personne, msg : Message) : void {
    if( ! this.isPersonneActive(pers)) {
      this._personnes.push(pers);
    }
    this._messages.push(msg);
  }


  get messages() : Message[] {
    return this._messages;
  }

  public addMessages(msg : Message) : void {
    this._messages.push(msg);
  }

}
