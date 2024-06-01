import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

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
        class="profilfoto"
        id="profilfoto"
        type="file"
        (change)="onFileSelected($event, 'profilfoto')"
      />
      <form class="form-container" (ngSubmit)="onSubmit()">
        <!-- Add ngSubmit event -->
        <div class="eingabefelder-container">
          <label for="name" class="schrift">Name</label>
          <input
            class="eingabefelder"
            name="name"
            type="text"
            [(ngModel)]="name"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="username" class="schrift">Username</label>
          <input
            class="eingabefelder"
            id="username"
            name="username"
            type="text"
            [(ngModel)]="username"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="ausweis" class="schrift">Ausweis</label>
          <input
            class="eingabefeldausweis"
            name="ausweis"
            type="file"
            (change)="onFileSelected($event, 'ausweis')"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="vorname" class="schrift">Vorname</label>
          <input
            class="eingabefelder"
            name="vorname"
            type="text"
            [(ngModel)]="vorname"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="phone" class="schrift">Telefonnummer</label>
          <input
            class="eingabefelder"
            type="text"
            id="phone"
            name="phone"
            placeholder="077 123 45 67"
            [(ngModel)]="telefonnummer"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="geburtsdatum" class="schrift">Geburtstdatum</label>
          <input
            class="eingabefelder"
            name="geburtsdatum"
            type="text"
            [(ngModel)]="geburtsdatum"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="strasse+nr" class="schrift">Strasse + Nr</label>
          <input
            class="eingabefelder"
            name="strasse+nr"
            type="text"
            [(ngModel)]="strasseNr"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="email" class="schrift">Email</label>
          <input
            class="eingabefelder"
            id="email"
            name="email"
            type="email"
            [(ngModel)]="email"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="password" class="schrift">Passwort</label>
          <input
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
            class="eingabefelder"
            name="postleitzahl"
            type="text"
            [(ngModel)]="postleitzahl"
          />
        </div>

        <div class="eingabefelder-container">
          <label for="ort" class="schrift">Ort</label>
          <input
            class="eingabefelder"
            name="ort"
            type="text"
            [(ngModel)]="ort"
          />
        </div>

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
      this.profilfoto = file;
      console.log("Ausgewählte Datei:", file);
      console.log("Dateityp:", fileType);

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
      } else {
        console.log("Ungültiger Dateityp");
        alert("Bitte laden Sie eine Datei im unterstützten Format hoch.");
        this.snackBar.open(
          "Ungültiger Dateityp, bitte lade eine Datei im unterstützten Format hoch",
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
    debugger;
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
          console.log(response);
          this.snackBar.open("Registrierung erfolgreich", "OK", {
            duration: 3000,
            verticalPosition: "top",
            horizontalPosition: "center",
          });
          // JWT token und user ID werde gespeichert
          const jwtToken = response.jwt;
          const userId = response.user.id;
          console.log("JWT token:", jwtToken);
          console.log("User ID:", userId);

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

                if (this.ausweis) {
                  ausweisFormData.append("files", this.ausweis);
                  ausweisFormData.append(
                    "ref",
                    "plugin::users-permissions.user"
                  ); // the name of your content type
                  ausweisFormData.append("refId", userId); // the id of the entry
                  ausweisFormData.append("field", "ausweis"); // the name of your field
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
              },
              (error) => console.log(error)
            );
          this.router.navigate(["/login"]);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
