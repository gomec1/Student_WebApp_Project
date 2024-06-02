import { Component, importProvidersFrom } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-ich-bin-tierbesitzer-inserieren",
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
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
                <label for="zeitdauer_von_bis" class="form_label"
                  >Zeitdauer von-bis</label
                >
                <textarea
                  class="form_input"
                  name="zeitdauer_von_bis"
                  type="text"
                  [(ngModel)]="zeitdauer_von_bis"
                  placeholder="z.B. Jeden Freitag Nachmittag und Samstag ganztags 📅🕒"
                ></textarea>
              </div>
            </table>
            <table>
              <div class="eingabefelder-container">
                <label for="totalbetrag_chf" class="form_label"
                  >Totalbetrag CHF</label
                >
                <textarea
                  class="form_input"
                  name="totalbetrag_chf"
                  type="text"
                  [(ngModel)]="totalbetrag_chf"
                  placeholder="z.B. 10 CHF pro Stunde oder 50 CHF pro Tag 🤑🐾🐱"
                ></textarea>
                <label for="beschreibung_wichtiger_infos" class="form_label"
                  >Beschreibung Wichtiger Infos
                </label>
                <textarea
                  class="form_input"
                  name="beschreibung_wichtiger_infos"
                  type="text"
                  [(ngModel)]="beschreibung_wichtiger_infos"
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
    <!-- <section class="hintergrundunten">
      <div>
        <h1 id="maintitle">Inserieren - Ich suche einen Tiersitter</h1>
      </div>
      <div>
        <form class="form-container">
          <table>
            <tr class="spalten_inserieren">
              <td>
                <label for="titel" class="form_label"
                  >Titel (Ich suche...)</label
                >
              </td>
              <td>
                <input class="form_input" name="titel" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="verfuegbarkeit" class="form_label">Tierart</label>
              </td>
              <td>
                <input class="form_input" name="verfuegbarkeit" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="Lohnkosten" class="form_label">Tierrasse</label>
              </td>
              <td>
                <input class="form_input" name="Lohnkosten" type="text" />
              </td>
            </tr>
            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Alter (optional)</label
                >
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Zeitdauer von - bis
                </label>
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Beschreibung wichtiger Infos
                </label>
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Totalbetrag CHF</label
                >
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <button id="insert_bild">Bild einfügen</button>
              </td>
              <td></td>
            </tr>
          </table>

          <input id="button_submit" type="submit" value="Submit" />
        </form>
      </div>
    </section> -->
  `,
  styleUrl: "./ich-bin-tierbesitzer-inserieren.component.css",
})
export class IchBinTierbesitzerInserierenComponent {
  titel: string = "";
  tiername: string = "";
  tierart: string = "";
  tierrasse: string = "";
  alter: string = "";
  zeitdauer_von_bis: string = "";
  beschreibung_wichtiger_infos: string = "";
  totalbetrag_chf: string = "";

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
        tiername: this.tiername,
        tierart: this.tierart,
        tierrasse: this.tierrasse,
        alter: this.alter,
        zeitdauer_von_bis: this.zeitdauer_von_bis,
        beschreibung_wichtiger_infos: this.beschreibung_wichtiger_infos,
        totalbetrag_chf: this.totalbetrag_chf,
        user: id,
      },
    };

    this.http
      .post("http://localhost:1337/api/inserat-ich-bin-tierbesitzers", payload)
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
