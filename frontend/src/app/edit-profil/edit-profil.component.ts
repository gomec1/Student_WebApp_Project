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
    <div *ngIf="user">
      <form [formGroup]="userForm" (ngSubmit)="updateUser()">
        <label for="username">Username: </label>
        <input id="username" type="text" formControlName="username" />

        <label for="email">Email: </label>
        <input type="email" type="text" formControlName="email" />

        <label for="password">Passwort: </label>
        <input id="password" type="password" formControlName="password" />

        <label for="telefonnummer">Telefonnummer: 0</label>
        <input type="number" formControlName="telefonnummer" />

        <label for="vorname">Vorname: </label>
        <input type="text" formControlName="vorname" />

        <label for="name">Name: </label>
        <input type="text" formControlName="name" />

        <label for="geburtsdatum">Geburtsdatum: </label>
        <input type="text" formControlName="geburtsdatum" />

        <label for="strasseNr">Strasse + Nr: </label>
        <input type="text" formControlName="strasseNr" />

        <label for="postleitzahl">Postleitzahl: </label>
        <input type="number" formControlName="postleitzahl" />

        <label for="ort">Ort: </label>
        <input type="text" formControlName="ort" />

        <label for="rolle">Rolle: </label>
        <select formControlName="rolle">
          <option value="Ich bin Tiersitter">Ich bin Tiersitter</option>
          <option value="Ich bin Tierbesitzer">Ich bin Tierbesitzer</option>
          <option value="beides">beides</option>
        </select>

        <button type="submit">Update</button>
        <button class="backToProfil" routerLink="/profil">Zurück</button>
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
