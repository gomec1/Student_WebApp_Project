import { Component, OnInit } from "@angular/core";
import { CommonModule, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormBuilder, FormGroup } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

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
    <div class="hintergrundunten" *ngIf="user">
      <form [formGroup]="userForm" (ngSubmit)="updateUser()">
        <table>
          <tr>
            <td><label class="form_label" for="username">Username: </label></td>
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
            <td><label class="form_label" for="email">Email: </label></td>
            <td>
              <input
                class="form_input"
                type="email"
                type="text"
                formControlName="email"
              />
            </td>
          </tr>

          <tr>
            <td><label class="form_label" for="password">Passwort: </label></td>
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
              <label class="form_label" for="telefonnummer"
                >Telefonnummer: 0</label
              >
            </td>
            <td>
              <input
                class="form_input"
                type="number"
                formControlName="telefonnummer"
              />
            </td>
          </tr>

          <tr>
            <td><label class="form_label" for="vorname">Vorname: </label></td>
            <td>
              <input class="form_input" type="text" formControlName="vorname" />
            </td>
          </tr>

          <tr>
            <td><label class="form_label" for="name">Name: </label></td>
            <td>
              <input class="form_input" type="text" formControlName="name" />
            </td>
          </tr>

          <tr>
            <td>
              <label class="form_label" for="geburtsdatum"
                >Geburtsdatum:
              </label>
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
              <label class="form_label" for="strasseNr">Strasse + Nr: </label>
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
              <label class="form_label" for="postleitzahl"
                >Postleitzahl:
              </label>
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
            <td><label class="form_label" for="ort">Ort: </label></td>
            <td>
              <input class="form_input" type="text" formControlName="ort" />
            </td>
          </tr>

          <tr>
            <td><label class="form_label" for="rolle">Rolle: </label></td>
            <td>
              <select id="rolle_dropdown" formControlName="rolle">
                <option value="Ich bin Tiersitter">Ich bin Tiersitter</option>
                <option value="Ich bin Tierbesitzer">
                  Ich bin Tierbesitzer
                </option>
                <option value="beides">beides</option>
              </select>
            </td>
          </tr>

          <tr>
            <td><button id="button_submit" type="submit">Update</button></td>
            <td>
              <button class="backToProfil" routerLink="/profil">Zurück</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  `,
  styleUrl: "./edit-profil.component.css",
})
export class EditProfilComponent implements OnInit {
  user: any;
  userForm: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
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
  //Initialisiert die EditProfilkomponente und ruft die API auf, um die Benutzerdaten abzurufen.
  ngOnInit(): void {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    this.http.get("http://localhost:1337/api/users/me", { headers }).subscribe({
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

    // Es sollen nur die Werte gesendet werden, die auch wirklich geändert wurden
    const updatedValues: any = {};
    for (const controlName in this.userForm.controls) {
      const control = this.userForm.controls[controlName];
      if (control.dirty) {
        updatedValues[controlName] = control.value;
      }
    }
    // Senden der aktualisierten Benutzerdaten an die API mit PUT Request
    this.http.put(url, updatedValues, { headers }).subscribe({
      next: (response: any) => {
        console.log("User updated successfully", response);
        this.user = response;
        this.snackBar
          .open("Die Daten wurden erfolgreich aktualisiert", "OK", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top",
          }) // Nutzer wird nach der Snackbar Meldung zur Landingpage weitergeleitet
          .afterDismissed()
          .subscribe(() => {
            // Nutzer wird zur Profilseite weitergeleitet
            window.location.href = "/profil";
          });
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
