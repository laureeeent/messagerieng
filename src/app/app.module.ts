import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitreComponent } from './composants/titre/titre.component';
import { PersonnesActivesComponent } from './composants/personnes-actives/personnes-actives.component';
import { MessagesComponent } from './composants/messages/messages.component';
import { NouveauMessageComponent } from './composants/nouveau-message/nouveau-message.component';
import { ListePersonneComponent } from './composants/liste-personne/liste-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    PersonnesActivesComponent,
    MessagesComponent,
    NouveauMessageComponent,
    ListePersonneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
