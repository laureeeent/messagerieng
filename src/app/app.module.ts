import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitreComponent } from './composants/titre/titre.component';
import { PersonnesActivesComponent } from './composants/personnes-actives/personnes-actives.component';
import { ListePersonneComponent } from './composants/liste-personne/liste-personne.component';
import { MessagesComponent} from "./composants/message_affichage/messages.component";
import { NouveauMessageComponent } from './Composants/nouveau-message/nouveau-message.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    PersonnesActivesComponent,
    MessagesComponent,
    ListePersonneComponent,
    NouveauMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
