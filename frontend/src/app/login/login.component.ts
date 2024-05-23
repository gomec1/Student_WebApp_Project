import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule],
  providers: [MatSnackBar, HttpClient],
  template: `
    <section class="hintergrundunten">
      <div class="maincontainer">
        <img
          class="profilzeichenGross"
          src="/assets/Login-Profilzeichen-Gross.png"
          alt="Profil Zeichen"
        />
        <div class="username-container">
          <input
            class="usernameBalken"
            placeholder="Username"
            [(ngModel)]="username"
          />
          <img
            class="profilzeichenklein"
            src="assets/Profil Zeichen-klein.png"
            alt="Profilzeichen"
          />
        </div>
        <div class="passwort-container">
          <input
            type="password"
            class="passwortBalken"
            placeholder="Passwort"
            [(ngModel)]="password"
          />
          <img
            class="schlosszeichen"
            src="assets/icon-schloss.png"
            alt="Passwortzeichen"
          />
        </div>
        <div class="eingelogtbleiben-container">
          <input
            type="checkbox"
            id="eingeloggtbleiben"
            name="eingeloggtbleiben"
          />
          <label for="eingeloggtbleiben">Eingeloggt bleiben</label>
        </div>
        <button class="buttons" (click)="login()">
          <h1 class="schriftbuttons">Login</h1>
        </button>
        <button class="buttons" routerLink="/registrieren">
          <h1 class="schriftbuttons">Registrieren</h1>
        </button>
      </div>
    </section>
  `,
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login() {
    debugger;
    const loginData = {
      identifier: this.username,
      password: this.password,
    };

    this.http
      .post("http://localhost:1337/api/auth/local", loginData)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.jwt) {
            // Der Login war erfolgreich und wir haben ein JWT erhalten
            // Sie können das Token im Local Storage speichern oder es anderweitig verwenden
            localStorage.setItem("token", response.jwt);
            // Bei Erfolg zur Hauptseite umleiten
            this.router.navigate(["/"]);
            console.log("Login erfolgreich");
            this.snackBar.open("Login erfolgreich", "Schließen", {
              duration: 5000,
            });
          } else {
            // Es gab ein Problem mit dem Login
            console.log("Username oder Passwort ist falsch");
            this.snackBar.open(
              "Username oder Passwort ist falsch",
              "Schließen",
              {
                duration: 5000,
              }
            );
          }
        },
        error: (error: any) => {
          console.log(error);
          this.snackBar.open("Ein Fehler ist aufgetreten", "Schließen", {
            duration: 5000,
          });
        },
      });
  }
}
