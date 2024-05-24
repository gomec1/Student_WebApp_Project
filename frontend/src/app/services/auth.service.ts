import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;

  constructor(private snackBar: MatSnackBar) {
    this.isLoggedIn = !!localStorage.getItem("token");
  }
  // Login Funktion
  login(token: string): void {
    localStorage.setItem("token", token);
    this.isLoggedIn = true;
  }
  // Logout Funktion
  logout(): void {
    localStorage.removeItem("token");
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
        // Redirect to landing page
        window.location.href = "/";
      });
  }
}
