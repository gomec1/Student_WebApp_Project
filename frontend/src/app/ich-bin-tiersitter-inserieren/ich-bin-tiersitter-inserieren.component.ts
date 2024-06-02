import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-ich-bin-tiersitter-inserieren",
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  template: `
    <div *ngIf="authService.isLoggedIn; else notLoggedIn">
      <section class="hintergrundunten">
        <div>
          <h1 id="maintitle">
            Inserieren - Ich bin ein Tiersitter und suche ein Tier zum Hüten
          </h1>
        </div>

        <form (ngSubmit)="onSubmit()">
          <div class="table-container">
            <table>
              <div class="eingabefelder-container">
                <label for="titel" class="form_label">Titel </label>
                <textarea
                  class="form_input"
                  name="titel"
                  type="text"
                  placeholder="z.B. Verlässlicher Katzensitter in Bern am start! 🐱🐾🏡"
                  [(ngModel)]="titel"
                ></textarea>
                <label for="verfuegbarkeit" class="form_label"
                  >Verfügbarkeit</label
                >
                <textarea
                  class="form_input"
                  name="verfuegbarkeit"
                  type="text"
                  [(ngModel)]="verfuegbarkeit"
                  placeholder="z.B. Jeden Freitag Nachmittag und Samstag ganztags 📅🕒"
                ></textarea>
              </div>
            </table>
            <table>
              <div class="eingabefelder-container">
                <label for="Lohnkosten" class="form_label">Lohnkosten</label>
                <textarea
                  class="form_input"
                  name="Lohnkosten"
                  type="text"
                  [(ngModel)]="lohnkosten"
                  placeholder="z.B. 10 CHF pro Stunde oder 50 CHF pro Tag 🤑🐾🐱"
                ></textarea>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Persönliche Beschreibung</label
                >
                <textarea
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                  [(ngModel)]="persoenliche_beschreibung"
                  placeholder="z.B. Ich bin ein grosser Katzenliebhaber, kann aber wegen meiner Arbeit keine eigene haben 😔🐱"
                ></textarea>
              </div>
            </table>
            <table>
              <div class="buttons-container">
                <button id="insert_bild" type="button">Bild einfügen</button>
                <input id="button_submit" type="submit" value="Inserieren" />
              </div>
            </table>
          </div>
        </form>
      </section>
    </div>
    <!-- Alternativer Inhalt, wenn der Benutzer nicht eingeloggt ist: -->
    <ng-template #notLoggedIn>
      <section class="hintergrundunten">
        <p class="nichteigeloggt">
          Du musst eingeloggt sein um ein Inserate aufzuschalten 😉
        </p>
        <section></section></section
    ></ng-template>
  `,
  styleUrl: "./ich-bin-tiersitter-inserieren.component.css",
})
export class IchBinTiersitterInserierenComponent {
  titel: string = "";
  persoenliche_beschreibung: string = "";
  verfuegbarkeit: string = "";
  lohnkosten: string = "";

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Hier wird der Inserat erstellt
    const id = localStorage.getItem("id");
    const payload = {
      data: {
        titel: this.titel,
        persoenliche_beschreibung: this.persoenliche_beschreibung,
        verfuegbarkeit: this.verfuegbarkeit,
        lohnkosten: this.lohnkosten,
        user: id,
      },
    };

    this.http
      .post("http://localhost:1337/api/inserat-ich-bin-tiersitters", payload)
      .subscribe(
        (response) => {
          console.log(response);
          this.snackBar.open("Inserat erstellt", "OK", {
            duration: 3000,
            verticalPosition: "top",
            horizontalPosition: "center",
          });
          this.router.navigate(["/"]);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
