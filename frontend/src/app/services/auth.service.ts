import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;

  constructor(private snackBar: MatSnackBar) {
    this.isLoggedIn = !!localStorage.getItem("token");
  }
  // Login Funktion
  login(token: string, id: string): void {
    localStorage.setItem("token", token);
    localStorage.setItem("id", id);
    this.isLoggedIn = true;
  }
  // Logout Funktion
  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.isLoggedIn = false;
    this.snackBar
      .open("Sie wurden erfolgreich ausgeloggt", "OK", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
      })
      // Nutzer wird nach der Snackbar Meldung zur Landingpage weitergeleitet
      .afterDismissed()
      .subscribe(() => {
        window.location.href = "/";
      });
  }

  // Neue Methode zum Öffnen der Snackbar (Wird bei Details-Seiten verwendet)
  openSnackBar(message: string, action: string, config: MatSnackBarConfig) {
    this.snackBar.open(message, action, config);
  }
}
