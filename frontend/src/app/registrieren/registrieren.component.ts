import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-registrieren",
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule, HttpClientModule],
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
      <!-- <input
        class="inputfoto"
        type="file"
        (change)="handleFileInput($event)"
        (change)="onFileSelected($event, 'profilfoto')"
        [(ngModel)]="profilfoto"
      /> -->

      <form class="form-container" (ngSubmit)="onSubmit()">
        <!-- Add ngSubmit event -->
        <!-- <div class="eingabefelder-container">
          <label for="name" class="schrift">Name</label>
          <input
            class="eingabefelder"
            name="name"
            type="text"
            [(ngModel)]="name"
          />
        </div> -->

        <div class="eingabefelder-container">
          <label for="username" class="schrift">Username</label>
          <input
            class="eingabefelder"
            name="username"
            type="text"
            [(ngModel)]="username"
          />
        </div>

        <!-- <div class="eingabefelder-container">
          <label for="ausweis" class="schrift">Ausweis</label>
          <input
            class="eingabefeldausweis"
            name="ausweis"
            type="file"
            [(ngModel)]="ausweis"
            (change)="onFileSelected($event, 'ausweis')"
          />
        </div> -->

        <!-- <div class="eingabefelder-container">
          <label for="vorname" class="schrift">Vorname</label>
          <input
            class="eingabefelder"
            name="vorname"
            type="text"
            [(ngModel)]="vorname"
          />
        </div> -->

        <!-- <div class="eingabefelder-container">
          <label for="phone" class="schrift">Telefonnummer</label>
          <input
            class="eingabefelder"
            type="text"
            id="phone"
            name="phone"
            placeholder="077 123 45 67"
            [(ngModel)]="telefonnummer"
          />
        </div> -->

        <!-- <div class="eingabefelder-container">
          <label for="geburtsdatum" class="schrift">Geburtstdatum</label>
          <input
            class="eingabefelder"
            name="geburtsdatum"
            type="text"
            [(ngModel)]="geburtsdatum"
          />
        </div> -->

        <!-- <div class="eingabefelder-container">
          <label for="strasse+nr" class="schrift">Strasse + Nr</label>
          <input
            class="eingabefelder"
            name="strasse+nr"
            type="text"
            [(ngModel)]="strasseNr"
          />
        </div> -->

        <div class="eingabefelder-container">
          <label for="email" class="schrift">Email</label>
          <input
            class="eingabefelder"
            name="email"
            type="email"
            [(ngModel)]="email"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="password" class="schrift">Passwort</label>
          <input
            class="eingabefelder"
            name="password"
            type="password"
            [(ngModel)]="password"
          />
        </div>

        <!-- <div class="eingabefelder-container">
          <label for="postleitzahl" class="schrift">Postleitzahl</label>
          <input
            class="eingabefelder"
            name="postleitzahl"
            type="text"
            [(ngModel)]="postleitzahl"
          />
        </div> -->

        <!-- <div class="eingabefelder-container">
          <label for="ort" class="schrift">Ort</label>
          <input
            class="eingabefelder"
            name="ort"
            type="text"
            [(ngModel)]="ort"
          />
        </div> -->

        <div class="eingabefelder-container">
          <label for="rolle" class="schrift">Rolle</label>
          <input list="rolle" name="rolle" [(ngModel)]="rolle" />
          <datalist id="rolle">
            <option value="Ich bin Tiersitter"></option>
            <option value="Ich bin Tierbesitzer"></option>
            <option value="beides"></option>
          </datalist>
        </div>

        <input class="submit" type="submit" value="Submit" />
        <!-- Change to input type="submit" -->
      </form>
    </section>
  `,
  styleUrl: "./registrieren.component.css",
})
export class RegistrierenComponent implements OnInit {
  /* Register function */
  username: string = "";
  vorname: string = "";
  ort: string = "";
  email: string = "";
  password: string = "";
  telefonnummer: string = "";
  rolle: string = "";
  name: string = "";
  strasseNr: string = "";
  postleitzahl: string = "";
  geburtsdatum: string = "";
  profilfoto: File | null = null;
  ausweis: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // Diese Methode wird aufgerufen, wenn der Benutzer ein Profilbild oder ausweis hochlädt
  onFileSelected(event: Event, type: string) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const fileType = file.type;
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/tiff",
        "image/vnd.microsoft.icon",
        "image/vnd.djvu",
        "application/zip",
        "application/pdf",
        "application/json",
      ];

      if (validImageTypes.includes(fileType)) {
        if (type === "profilfoto") {
          this.profilfoto = file;
        } else if (type === "ausweis") {
          this.ausweis = file;
        }
      } else {
        alert("Bitte laden Sie eine Datei im unterstützten Format hoch.");
      }
    }
  }

  onSubmit() {
    debugger;

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        username: this.username,
        vorname: this.vorname,
        ort: this.ort,
        email: this.email,
        password: this.password,
        telefonnummer: this.telefonnummer,
        rolle: this.rolle,
        name: this.name,
        strasseNr: this.strasseNr,
        postleitzahl: this.postleitzahl,
        geburtsdatum: this.geburtsdatum,
      })
    );

    if (this.profilfoto) {
      formData.append("files.profilfoto", this.profilfoto);
    }

    if (this.ausweis) {
      formData.append("files.ausweis", this.ausweis);
    }

    this.http
      .post("http://localhost:1337/api/auth/local/register", formData)
      .subscribe((response) => {
        console.log(response);
      });
  }

  /* Foto hochladen und wird ersetzt Funktion */
  backgroundImage: string = ""; // Declare the 'backgroundImage' property
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
