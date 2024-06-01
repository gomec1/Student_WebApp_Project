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
    <section class="hintergrundunten">
      <div>
        <h1 id="maintitle">
          Inserieren - Ich bin ein Tiersitter und suche ein Tier zum hüten
        </h1>
      </div>
      <div>
        <form class="form-container" (ngSubmit)="onSubmit()">
          <table>
            <tr class="spalten_inserieren">
              <td>
                <label for="titel" class="form_label"
                  >Titel (Ich suche...)</label
                >
              </td>
              <td>
                <input
                  class="form_input"
                  name="titel"
                  type="text"
                  [(ngModel)]="titel"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="verfuegbarkeit" class="form_label"
                  >Verfügbarkeit</label
                >
              </td>
              <td>
                <input
                  class="form_input"
                  name="verfuegbarkeit"
                  type="text"
                  [(ngModel)]="verfuegbarkeit"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="Lohnkosten" class="form_label">Lohnkosten</label>
              </td>
              <td>
                <input
                  class="form_input"
                  name="Lohnkosten"
                  type="text"
                  [(ngModel)]="lohnkosten"
                />
              </td>
            </tr>
            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Persönliche Beschreibung</label
                >
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                  [(ngModel)]="persoenliche_beschreibung"
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
    </section>
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
    private authService: AuthService
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
