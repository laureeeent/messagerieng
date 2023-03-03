import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Commetuveux} from "../models/commetuveux";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getCommeTuveux() : Observable<Commetuveux> {
    return this.http.get<Commetuveux>('https://api.chucknorris.io/jokes/random');
  }

  constructor(
    private http : HttpClient
  ) {

  }
}
