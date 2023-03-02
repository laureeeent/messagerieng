import {Personne} from "./Personne";

export class Message {
  private _auteur : Personne;
  private _destinataire : Personne;
  private _contenu : string ;

  private _date : Date;


  constructor(auteur: Personne, destinataire: Personne, contenu: string) {
    this._auteur = auteur;
    this._destinataire = destinataire;
    this._contenu = contenu;
    this._date = new Date();
  }


  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
  get auteur(): Personne {
    return this._auteur;
  }

  set auteur(value: Personne) {
    this._auteur = value;
  }

  get destinataire(): Personne {
    return this._destinataire;
  }

  set destinataire(value: Personne) {
    this._destinataire = value;
  }

  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }
}
