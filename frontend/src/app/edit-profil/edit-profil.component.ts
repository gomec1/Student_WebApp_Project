import { Component, OnInit } from "@angular/core";
import { CommonModule, NgIf } from "@angular/common";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { ReactiveFormsModule, FormBuilder, FormGroup } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-edit-profil",
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    NgIf,
    CommonModule,
    ReactiveFormsModule,
  ],

  template: `
    <div *ngIf="authService.isLoggedIn; else notLoggedIn">
      <section class="hintergrundunten" *ngIf="user">
        <dt><h1 class="titel">Profil bearbeiten</h1></dt>
        <form [formGroup]="userForm" (ngSubmit)="updateUser()">
          <div class="table_container">
            <table>
              <div class="image-upload">
                <input
                  type="file"
                  (change)="onFileSelected($event)"
                  class="image-upload__input"
                />
                <img
                  class="profilbild image-upload__image"
                  [src]="'http://localhost:1337' + user.profilfoto.url"
                />
              </div>
              <tr>
                <td>
                  <label class="form_label" for="username">Username </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    id="username"
                    type="text"
                    formControlName="username"
                  />
                </td>
              </tr>

              <tr>
                <td><label class="form_label" for="email">Email </label></td>
                <td>
                  <input
                    class="form_input"
                    type="email"
                    formControlName="email"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="password">Passwort </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    id="password"
                    type="password"
                    formControlName="password"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="vorname">Vorname </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    type="text"
                    formControlName="vorname"
                  />
                </td>
              </tr>

              <tr>
                <td><label class="form_label" for="name">Name </label></td>
                <td>
                  <input
                    class="form_input"
                    type="text"
                    formControlName="name"
                  />
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <label class="form_label" for="telefonnummer">Tel. </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    type="string"
                    formControlName="telefonnummer"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="form_label" for="geburtsdatum">Geb. </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    type="text"
                    formControlName="geburtsdatum"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="strasseNr">Strasse+Nr </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    type="text"
                    formControlName="strasseNr"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="postleitzahl">PLZ </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    type="number"
                    formControlName="postleitzahl"
                  />
                </td>
              </tr>

              <tr>
                <td><label class="form_label" for="ort">Ort </label></td>
                <td>
                  <input class="form_input" type="text" formControlName="ort" />
                </td>
              </tr>

              <tr>
                <td><label class="form_label" for="rolle">Rolle </label></td>
                <td>
                  <select id="rolle_dropdown" formControlName="rolle">
                    <option value="Ich bin Tiersitter">
                      Ich bin Tiersitter
                    </option>
                    <option value="Ich bin Tierbesitzer">
                      Ich bin Tierbesitzer
                    </option>
                    <option value="beides">beides</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="buttons">
                  <button class="backToProfil" routerLink="/">Zurück</button>
                </td>
                <td class="buttons">
                  <button id="button_submit" type="submit">Speichern</button>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </section>
    </div>
    <!-- Alternativer Inhalt, wenn der Benutzer nicht eingeloggt ist: -->
    <ng-template #notLoggedIn>
      <section class="hintergrundunten">
        <p class="nichteigeloggt">Nicht eingeloggt 😞</p>
        <section></section></section
    ></ng-template>
  `,
  styleUrl: "./edit-profil.component.css",
})
export class EditProfilComponent implements OnInit {
  user: any;
  userForm: FormGroup;
  profilfoto: File | null = null;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    private router: Router
  ) {
    //Damit wird das Formular mit den Momentanen Benutzerdaten initialisiert
    this.userForm = this.formBuilder.group({
      username: "",
      email: "",
      password: "",
      telefonnummer: "",
      vorname: "",
      name: "",
      geburtsdatum: "",
      strasseNr: "",
      postleitzahl: "",
      ort: "",
      rolle: "",
    });
  }
  // Funktion um das ausgewählte Bild zu verarbeiten
  onFileSelected(event: Event): void {
    console.log("onFileSelected wurde aufgerufen");
    const file = (event.target as HTMLInputElement).files?.item(0);
    if (file) {
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
        console.log("Profilfoto gesetzt:", this.profilfoto);
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
  //Initialisiert die EditProfilkomponente und ruft die API auf, um die Benutzerdaten abzurufen.
  ngOnInit(): void {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    this.http
      .get("http://localhost:1337/api/users/me?populate=*", { headers })
      .subscribe({
        next: (response: any) => {
          this.user = response;
          this.userForm.patchValue(this.user);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }
  // Funktion um die Benutzerdaten zu aktualisieren
  updateUser(): void {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const url = `http://localhost:1337/api/users/${this.user.id}`;
    const profilfotoFormData = new FormData();

    // Es sollen nur die Werte gesendet werden, die auch wirklich geändert wurden
    const formData: FormData = new FormData();
    for (const controlName in this.userForm.controls) {
      const control = this.userForm.controls[controlName];
      if (control.dirty) {
        formData.append(controlName, control.value);
      }
    }
    // JWT token und user ID aus dem Local Storage holen
    const jwtToken = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    console.log("JWT token:", jwtToken);
    console.log("User ID:", userId);

    // Füge das hochgeladene Bild hinzu, falls vorhanden
    if (this.profilfoto) {
      profilfotoFormData.append("files", this.profilfoto);
      profilfotoFormData.append("ref", "plugin::users-permissions.user"); // the name of your content type
      profilfotoFormData.append("refId", userId ?? ""); // the id of the entry
      profilfotoFormData.append("field", "profilfoto"); // the name of your field
    }

    // Senden der aktualisierten Benutzerdaten an die API mit PUT Request
    this.http.put(url, formData, { headers }).subscribe({
      next: (response: any) => {
        console.log("User updated successfully", response);
        this.user = response;
        this.snackBar
          .open("Die Daten wurden erfolgreich aktualisiert", "OK", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          })
          .afterDismissed()
          .subscribe(() => {
            this.router.navigate(["/"]); // Redirect user to landing page
          });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    // Senden des Profilfotos an die API mit POST Request
    if (this.profilfoto) {
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
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
