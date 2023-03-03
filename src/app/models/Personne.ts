export class Personne{
  private _nom : string;
  private _prenom : string;
  private _email : string;


  constructor(prenom: string = "", nom: string = "", email: string = "") {
    this._nom = nom;
    this._prenom = prenom;
    this._email = email;
  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  public afficher() : void {
    console.log(this._prenom + " " + this._nom + " "+ ", email : "+ this._email);
  }
  public toString() : string {
    return this._prenom + " " + this._nom + " "+ ", email : "+ this._email;
  }
}
