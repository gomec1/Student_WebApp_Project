import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-registrieren",
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule, HttpClientModule],
  template: `
    <section class="hintergrundunten">
      <h1 class="überschrift">Registrieren</h1>
      <div class="fotohochladenkreis">
        <img
          class="profilzeichen"
          src="/assets/profil-zeichen.png"
          alt="Profil Zeichen"
        />
        <h1 class="schriftfotohochladen">Profilfoto hinzufügen</h1>
      </div>
      <input
        tabindex="1"
        class="profilfoto"
        id="profilfoto"
        type="file"
        (change)="onFileSelected($event, 'profilfoto')"
      />
      <form class="form-container" (ngSubmit)="onSubmit()">
        <div class="eingabefelder-container">
          <label for="name" class="schrift">Name</label>
          <input
            tabindex="2"
            class="eingabefelder"
            name="name"
            type="text"
            [(ngModel)]="name"
            placeholder="Mustermann"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="username" class="schrift">Username</label>
          <input
            tabindex="6"
            class="eingabefelder"
            id="username"
            name="username"
            type="text"
            [(ngModel)]="username"
            placeholder="max_mustermann"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="ausweis" class="schrift">Ausweis</label>
          <input
            tabindex="10"
            class="eingabefeldausweis"
            name="ausweis"
            type="file"
            (change)="onFileSelected($event, 'ausweis')"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="vorname" class="schrift">Vorname</label>
          <input
            tabindex="3"
            class="eingabefelder"
            name="vorname"
            type="text"
            [(ngModel)]="vorname"
            placeholder="Max"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="phone" class="schrift">Telefonnummer</label>
          <input
            tabindex="7"
            class="eingabefelder"
            type="text"
            id="phone"
            name="phone"
            placeholder="+41 79 123 45 67"
            [(ngModel)]="telefonnummer"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="geburtsdatum" class="schrift">Geburtstdatum</label>
          <input
            tabindex="11"
            class="eingabefelder"
            name="geburtsdatum"
            type="text"
            [(ngModel)]="geburtsdatum"
            placeholder="dd.mm.yyyy"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="strasse+nr" class="schrift">Strasse + Nr</label>
          <input
            tabindex="4"
            class="eingabefelder"
            name="strasse+nr"
            type="text"
            [(ngModel)]="strasseNr"
            placeholder="Musterstrasse 123"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="email" class="schrift">Email</label>
          <input
            tabindex="8"
            class="eingabefelder"
            id="email"
            name="email"
            type="email"
            [(ngModel)]="email"
            placeholder="max.mustermann@bfh.ch"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="password" class="schrift">Passwort</label>
          <input
            tabindex="12"
            class="eingabefelder"
            id="password"
            name="password"
            type="password"
            [(ngModel)]="password"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="postleitzahl" class="schrift">Postleitzahl</label>
          <input
            tabindex="5"
            class="eingabefelder"
            name="postleitzahl"
            type="text"
            [(ngModel)]="postleitzahl"
            placeholder="1234"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="ort" class="schrift">Ort</label>
          <input
            tabindex="9"
            class="eingabefelder"
            name="ort"
            type="text"
            [(ngModel)]="ort"
            placeholder="Musterstadt"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="rolle" class="schrift">Rolle</label>
          <input tabindex="13" list="rolle" name="rolle" [(ngModel)]="rolle" />
          <datalist id="rolle">
            <option value="Ich bin Tiersitter"></option>
            <option value="Ich bin Tierbesitzer"></option>
            <option value="beides"></option>
          </datalist>
        </div>
        <div></div>
        <input
          tabindex="14"
          id="button_submit"
          type="submit"
          value="Registrieren"
        />
      </form>
    </section>
  `,
  styleUrl: "./registrieren.component.css",
})
export class RegistrierenComponent implements OnInit {
  // Variablen für die Registrierung
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

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // Diese Methode wird aufgerufen, wenn der Benutzer ein Profilbild oder ausweis hochlädt
  onFileSelected(event: Event, type: string) {
    console.log("onFileSelected wurde aufgerufen");

    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const fileType = file.type;

      console.log("Ausgewählte Datei:", file);
      console.log("Dateityp:", fileType);
      // // Alle von Strapi unterstützten Bildformate für das Profilfoto und den Ausweis
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
          console.log("Profilfoto gesetzt:", this.profilfoto);
        } else if (type === "ausweis") {
          this.ausweis = file;
          console.log("Ausweis gesetzt:", this.ausweis);
        }
        // Wenn der Dateiformat nicht unterstützt wird, wird eine Fehlermeldung angezeigt
      } else {
        console.log("Ungültiger Dateityp");
        this.snackBar.open(
          "Ungültiger Dateiformat. Erlaubte Formate sind: JPEG, PNG, GIF, SVG, TIFF, ICO, DVU, ZIP, PDF oder JSON",
          "OK",
          {
            duration: 5000,
            verticalPosition: "top",
            horizontalPosition: "center",
          }
        );
      }
    } else {
      console.log("Keine Datei ausgewählt");
    }
  }

  // Registrierung des Benutzers
  onSubmit() {
    // Überprüfen, ob alle Daten vorhanden sind
    if (
      !this.username ||
      !this.vorname ||
      !this.ort ||
      !this.email ||
      !this.password ||
      !this.telefonnummer ||
      !this.rolle ||
      !this.name ||
      !this.strasseNr ||
      !this.postleitzahl ||
      !this.geburtsdatum ||
      !this.profilfoto ||
      !this.ausweis
    ) {
      this.snackBar.open(
        "Bitte fülle alle Felder aus und laden ein Profilfoto und Ausweis hoch",
        "OK",
        {
          duration: 7000,
          verticalPosition: "top",
          horizontalPosition: "center",
        }
      );
      return;
    }
    const formData = new FormData();
    formData.append("username", this.username);
    formData.append("vorname", this.vorname);
    formData.append("ort", this.ort);
    formData.append("email", this.email);
    formData.append("password", this.password);
    formData.append("telefonnummer", this.telefonnummer);
    formData.append("rolle", this.rolle);
    formData.append("name", this.name);
    formData.append("strasseNr", this.strasseNr);
    formData.append("postleitzahl", this.postleitzahl);
    formData.append("geburtsdatum", this.geburtsdatum);

    this.http
      .post("http://localhost:1337/api/auth/local/register", formData)
      .subscribe(
        (response: any) => {
          console.log("TEST", response);
          this.snackBar
            .open("Registrierung erfolgreich", "OK", {
              duration: 5000,
              verticalPosition: "top",
              horizontalPosition: "center",
            })
            .afterDismissed()
            .subscribe(() => {
              window.location.reload();
              window.scrollTo(0, 0);
            });
          // JWT token und user ID werden in variablen gespeichert
          const jwtToken = response.jwt;
          const userId = response.user.id;
          console.log("Token wurde erfolgreich gespeichert:");
          console.log("User ID wurde erfolgreich gespeichert:");

          // Mit der gepeicherten JWT token und user ID wird das Profilfoto und der Ausweis hochgeladen
          const profilfotoFormData = new FormData();
          const ausweisFormData = new FormData();
          if (this.profilfoto) {
            profilfotoFormData.append("files", this.profilfoto);
            profilfotoFormData.append("ref", "plugin::users-permissions.user"); // the name of your content type
            profilfotoFormData.append("refId", userId); // the id of the entry
            profilfotoFormData.append("field", "profilfoto"); // the name of your field
          }

          // Upload Profilfoto
          this.http
            .post("http://localhost:1337/api/upload", profilfotoFormData, {
              headers: new HttpHeaders({
                Authorization: `Bearer ${jwtToken}`,
              }),
            })
            .subscribe(
              (response) => {
                console.log(response);
              },
              (error) => console.log(error)
            );

          if (this.ausweis) {
            ausweisFormData.append("files", this.ausweis);
            ausweisFormData.append("ref", "plugin::users-permissions.user");
            ausweisFormData.append("refId", userId);
            ausweisFormData.append("field", "ausweis");
          }

          // Upload Ausweis
          this.http
            .post("http://localhost:1337/api/upload", ausweisFormData, {
              headers: new HttpHeaders({
                Authorization: `Bearer ${jwtToken}`,
              }),
            })
            .subscribe(
              (response) => console.log(response),
              (error) => console.log(error)
            );

          this.router.navigate(["/login"]);
        },
        (error) => {
          console.error(error);
          this.snackBar.open(
            "Fehler: Ihre Email adresse oder Username existiert schon ",
            "OK",
            {
              duration: 3000,
              verticalPosition: "top",
              horizontalPosition: "center",
            }
          );
        }
      );
  }
}
