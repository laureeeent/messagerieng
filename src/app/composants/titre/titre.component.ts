import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Commetuveux} from "../../models/commetuveux";

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent {
  public titre: string;
  public commetuveux$ : Observable<Commetuveux>;
  constructor( private api : ApiService) {
    this.titre = "Messagerie";
    this.commetuveux$ = this.api.getCommeTuveux();
  }

}
