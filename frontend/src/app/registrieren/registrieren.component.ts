import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-registrieren",
  standalone: true,
  imports: [RouterModule, NgIf],
  template: `
    <section class="hintergrundunten">
      <h1 class="überschrift">Registrieren</h1>
      <div
        class="fotohochladenkreis"
        [style.backgroundImage]="'url(' + backgroundImage + ')'"
      >
        <img
          class="profilzeichen"
          src="/assets/profil-zeichen.png"
          alt="Profil Zeichen"
          *ngIf="!backgroundImage"
        />
        <h1 class="schriftfotohochladen" *ngIf="!backgroundImage">
          Profilfoto hinzufügen
        </h1>
      </div>

      <input class="inputfoto" type="file" (change)="handleFileInput($event)" />

      <form class="form-container">
        <div class="eingabefelder-container">
          <label for="name" class="schrift">Name</label>
          <input class="eingabefelder" name="name" type="text" />
        </div>
        <div class="eingabefelder-container">
          <label for="username" class="schrift">Username</label>
          <input class="eingabefelder" name="username" type="text" />
        </div>
        <div class="eingabefelder-container">
          <label for="ausweis" class="schrift">Ausweis</label>
          <input class="eingabefeldausweis" name="ausweis" type="file" />
        </div>
        <div class="eingabefelder-container">
          <label for="vorname" class="schrift">Vorname</label>
          <input class="eingabefelder" name="vorname" type="text" />
        </div>
        <div class="eingabefelder-container">
          <label for="phone" class="schrift">Telefonnummer</label>
          <input
            class="eingabefelder"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+00 77 123 45 67"
            pattern="[+1-100]-[1-9]{3}-[1-9]{3}-[1-9]{1}-[1-9]{2}"
          />
        </div>
        <div class="eingabefelder-container">
          <label for="geburtsdatum" class="schrift">Geburtstdatum</label>
          <input class="eingabefelder" name="geburtsdatum" type="date" />
        </div>

        <div class="eingabefelder-container">
          <label for="strasse+nr" class="schrift">Strasse + Nr</label>
          <input class="eingabefelder" name="strasse+nr" type="text" />
        </div>
        <div class="eingabefelder-container">
          <label for="email" class="schrift">Email</label>
          <input class="eingabefelder" name="email" type="text" />
        </div>
        <div class="eingabefelder-container">
          <label for="passwort" class="schrift">Passwort</label>
          <input class="eingabefelder" name="passwort" type="password" />
        </div>
        <div class="eingabefelder-container">
          <label for="postleitzahl" class="schrift">Postleitzahl</label>
          <input class="eingabefelder" name="postleitzahl" type="text" />
        </div>
        <div class="eingabefelder-container">
          <label for="emailWiederholen" class="schrift"
            >Email wiederholen</label
          >
          <input class="eingabefelder" name="emailWiederholen" type="email" />
        </div>
        <div class="eingabefelder-container">
          <label for="passwortWiederholen" class="schrift"
            >Passwort wiederholen</label
          >
          <input
            class="eingabefelder"
            name="passwortWiederholen"
            type="password"
          />
        </div>
        <div class="eingabefelder-container">
          <label for="ort" class="schrift">Ort</label>
          <input class="eingabefelder" name="ort" type="text" />
        </div>
        <div class="eingabefelder-container">
          <label for="ichSucheTiersitter" class="schrift"
            >Ich suche Tiersitter</label
          >
          <input type="checkbox" name="ichSucheTiersitter" />
        </div>
        <div class="eingabefelder-container">
          <label for="ichBinTierhütter" class="schrift"
            >Ich bin Tierhütter</label
          >
          <input type="checkbox" name="ichBinTierhütter" />
        </div>
        <input class="submit" type="submit" />
      </form>
    </section>
  `,
  styleUrl: "./registrieren.component.css",
})
export class RegistrierenComponent implements OnInit {
  /* Login/Registraed function */
  signupUsers: any[] = [];
  sigupObj: any = {
    userName: "",
    name: "",
    vorname: "",
    strasseNr: "",
    postleitzahl: "",
    ort: "",
    geburtstdatum: "",
    email: "",
    emailWiederholen: "",
    telefonnummer: "",
    ausweisHochladen: "",
    passwort: "",
    passwortWiederholen: "",
  };

  backgroundImage: string = ""; // Declare the 'backgroundImage' property

  constructor() {}
  ngOnInit(): void {}

  /* Foto hochladen Funktion */
  handleFileInput(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.backgroundImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
