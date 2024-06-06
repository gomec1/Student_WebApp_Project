import { Component, OnInit, HostListener } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule],
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
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  // Wenn der Benutzer die Enter-Taste drückt, wird die Methode login() aufgerufen
  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.login();
    }
  }
  // Login vom Benutzer
  login(): void {
    const loginData = {
      identifier: this.username,
      password: this.password,
    };

    this.http
      .post("http://localhost:1337/api/auth/local", loginData)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          // Login war erfolgreich
          if (response.jwt) {
            // Der Token und die UserId werden im LocalStorage gespeichert
            // Und der User status wird auf true gesetzt
            this.authService.login(response.jwt, response.user.id);
            localStorage.setItem("token", response.jwt);
            // Bei Erfolg wird der User auf die Startseite weitergeleitet
            this.router.navigate(["/"]).then(() => {
              console.log("Login erfolgreich");
              this.snackBar
                .open("Login erfolgreich", "Schliessen", {
                  duration: 5000,
                  panelClass: ["custom-snackbar"],
                  horizontalPosition: "center",
                  verticalPosition: "top",
                })
                .afterDismissed()
                .subscribe(() => {
                  window.location.reload();
                });
            });
          }
        },
        error: (error: any) => {
          console.log(error);
          this.snackBar.open(
            "Username oder Passwort ist falsch oder existiert nicht!",
            "Schliessen",
            {
              duration: 5000,
              panelClass: ["custom-snackbar"],
              horizontalPosition: "center",
              verticalPosition: "top",
            }
          );
        },
      });
  }
}
