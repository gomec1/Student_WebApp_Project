import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hintergrundunten">
      <div class="maincontainer">
        <img
          class="profilzeichenGross"
          src="/assets/Login-Profilzeichen-Gross.png"
          alt="Profil Zeichen"
        />
        <div class="username-container">
          <input class="usernameBalken" placeholder="Username" />
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
        <button class="buttons">
          <h1 class="schriftbuttons">Login</h1>
        </button>
        <button class="buttons" routerLink="/registrieren">
          <h1 class="schriftbuttons">Registrieren</h1>
        </button>
      </div>
    </section>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginobj: any = {
    userName: '',
    passwort: '',
  };

  constructor() {}
  ngOnInit(): void {}
}
