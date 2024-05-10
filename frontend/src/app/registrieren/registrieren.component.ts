import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrieren',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hintergrundunten">
      <h1 class="überschrift">Registrieren</h1>
      <form class="form-container">
        <div class="eingabefelder-container">
          <h1 class="schrift">Name</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Vorname</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Strasse + Nr</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Postleitzahl</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Ort</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Geburtsdatum</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Email</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Email wiederholen</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Telefonnummer</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Ausweis hochladen</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">weiss noch nicht</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Passwort</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Passwort wiederholen</h1>
          <input class="eingabefelder" type="text" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Ich suche Tiersitter</h1>
          <input type="checkbox" />
        </div>
        <div class="eingabefelder-container">
          <h1 class="schrift">Ich bin Tierhütter</h1>
          <input type="checkbox" />
        </div>
      </form>
    </section>
  `,
  styleUrl: './registrieren.component.css',
})
export class RegistrierenComponent implements OnInit {
  /* Login/Registraed function */
  signupUsers: any[] = [];
  sigupObj: any = {
    userName: '',
    name: '',
    vorname: '',
    strasseNr: '',
    postleitzahl: '',
    ort: '',
    geburtstdatum: '',
    email: '',
    emailWiederholen: '',
    telefonnummer: '',
    ausweisHochladen: '',
    passwort: '',
    passwortWiederholen: '',
  };

  constructor() {}
  ngOnInit(): void {}
}
