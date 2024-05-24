import { Component, OnInit } from "@angular/core";
import { CommonModule, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-profil",
  standalone: true,
  imports: [RouterModule, HttpClientModule, NgIf, CommonModule],
  template: `
    <div *ngIf="authService.isLoggedIn; else notLoggedIn">
      <div *ngIf="user">
        <!-- <p>{{ user.profilfoto }}</p> -->
        <h1>Username: {{ user.username }}</h1>
        <p>Email: {{ user.email }}</p>
        <p>Telefonnummer: 0{{ user.telefonnummer }}</p>
        <p>Vorname: {{ user.vorname }}</p>
        <p>Name: {{ user.name }}</p>
        <p>Geburtsdatum: {{ user.geburtsdatum }}</p>
        <p>Strasse + Nr: {{ user.strasseNr }}</p>
        <p>Postleitzahl: {{ user.postleitzahl }}</p>
        <p>Ort: {{ user.ort }}</p>
        <p>Rolle: {{ user.rolle }}</p>
        <!-- <p>{{ user.ausweis }}</p> -->
      </div>
      <button class="buttonEditProfil" routerLink="/edit-profil">
        <p>Daten aktualisieren</p>
      </button>
    </div>
    <!-- Alternativer Inhalt, wenn der Benutzer nicht eingeloggt ist: -->
    <ng-template #notLoggedIn>
      <p>Nicht eingeloggt</p>
    </ng-template>
  `,
  styleUrl: "./profil.component.css",
})
export class ProfilComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient, public authService: AuthService) {}

  //Initialisiert die Profilkomponente und ruft die API auf, um die Benutzerdaten abzurufen.
  ngOnInit(): void {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    this.http.get("http://localhost:1337/api/users/me", { headers }).subscribe({
      next: (response: any) => {
        this.user = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
