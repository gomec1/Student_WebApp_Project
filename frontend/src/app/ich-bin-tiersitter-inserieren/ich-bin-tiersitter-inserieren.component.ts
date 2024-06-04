import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
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
            Inserieren - Ich bin ein
            <span style="color: green">Tiersitter</span> und suche ein Tier zum
            Hüten
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
                  placeholder="z.B. 30CHF pro Tag für 2x Füttern, Katzenklo reinigen und kuscheln 🤑🐾🐱"
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
                <input
                  type="file"
                  id="input_bild"
                  class="input_bild"
                  name="bild"
                  (change)="onFileSelected($event)"
                />
                <label for="input_bild" id="insert_bild">Bild einfügen</label>

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
  // Diese Variablen speichern die Eingaben des Benutzers
  titel: string = "";
  persoenliche_beschreibung: string = "";
  verfuegbarkeit: string = "";
  lohnkosten: string = "";
  bild: File | null = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  // Diese Methode wird aufgerufen, wenn der Benutzer ein Bild  für das Inserat auswählt
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files;
    if (file) {
      // Überprüfen, ob das Dateiformat erlaubt ist
      const allowedFormats = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/tiff",
        "image/x-icon",
        "image/vnd.djvu",
      ];
      const fileFormat = file[0].name.split(".").pop()?.toLowerCase();
      if (fileFormat && allowedFormats.includes(fileFormat)) {
        this.bild = file[0];
        console.log("Bild hochgeladen:");
      } else {
        this.snackBar.open(
          "Ungültiges Dateiformat. Erlaubte Formate sind: JPEG, JPG, PNG, GIF, SVG, TIFF, ICO oder DVU",
          "OK",
          {
            duration: 5000,
            verticalPosition: "top",
            horizontalPosition: "center",
          }
        );
      }
    }
  }
  onSubmit(): void {
    const id = localStorage.getItem("id") || "";
    const data = {
      data: {
        titel: this.titel,
        persoenliche_beschreibung: this.persoenliche_beschreibung,
        verfuegbarkeit: this.verfuegbarkeit,
        lohnkosten: this.lohnkosten,
        user: id,
      },
    };

    // Erstellt zuerst das Inserat
    this.http
      .post("http://localhost:1337/api/inserat-ich-bin-tiersitters", data)
      .subscribe(
        (response: any) => {
          console.log(response);
          const inseratId = response.data.id; // ID des erstellten Inserats abrufen (wird für das Bild benötigt)
          const jwtToken = localStorage.getItem("token");
          console.log("JWT token:", jwtToken);
          console.log("Inserat ID:", inseratId);

          // Danach hochladen des Bildes und Zuordnung zum Inserat
          const formData = new FormData();
          if (this.bild) {
            console.log(this.bild); // Überprüfen Sie, ob this.bild definiert ist
            console.log(this.bild.name); // Überprüfen Sie, ob this.bild.name definiert ist
            formData.append("files", this.bild, this.bild.name);
            formData.append(
              "ref",
              "api::inserat-ich-bin-tiersitter.inserat-ich-bin-tiersitter"
            );
            formData.append("refId", inseratId);
            formData.append("field", "bild");
          }
          // Senden Sie das Bild ans Backend
          this.http
            .post("http://localhost:1337/api/upload", formData, {
              headers: new HttpHeaders({
                Authorization: `Bearer ${jwtToken}`,
              }),
            })
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
              (error) => {
                console.error(error);
              }
            );
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
