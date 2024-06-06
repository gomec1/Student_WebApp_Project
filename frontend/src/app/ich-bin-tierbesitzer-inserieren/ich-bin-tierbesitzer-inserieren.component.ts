import { Component, importProvidersFrom } from "@angular/core";
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
  selector: "app-ich-bin-tierbesitzer-inserieren",
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  template: `
    <div *ngIf="authService.isLoggedIn; else notLoggedIn">
      <section class="hintergrundunten">
        <div>
          <h1 id="maintitle">
            Inserieren - Ich bin ein
            <span style="color: green">Tierbesitzer</span> und suche einen
            Tiersitter
          </h1>
        </div>

        <form (ngSubmit)="onSubmit()">
          <div class="table-container">
            <table>
              <div class="eingabefelder-container1">
                <label for="titel" class="form_label">Titel </label>
                <textarea
                  class="form_input"
                  name="titel"
                  type="text"
                  placeholder="z.B. Tom braucht ein Zuhause während den Ferien ! 🐱🏡"
                  [(ngModel)]="titel"
                ></textarea>
                <label for="tierart" class="form_label">Tierart </label>
                <input
                  class="form_input_klein"
                  name="tierart"
                  type="text"
                  placeholder="z.B. Katze "
                  [(ngModel)]="tierart"
                />
                <label for="tiername" class="form_label">Tiername </label>
                <input
                  class="form_input_klein"
                  name="tiername"
                  type="text"
                  placeholder="z.B. Tom! "
                  [(ngModel)]="tiername"
                />

                <label for="tierrasse" class="form_label">Tierrasse </label>
                <input
                  class="form_input_klein"
                  name="tierrasse"
                  type="text"
                  placeholder="z.B. Perser "
                  [(ngModel)]="tierrasse"
                />
                <label for="alter" class="form_label">Alter </label>
                <input
                  class="form_input_klein"
                  name="alter"
                  type="text"
                  placeholder="z.B. Perser "
                  [(ngModel)]="alter"
                />
              </div>
            </table>
            <table>
              <div class="eingabefelder-container">
                <label for="beschreibung_wichtiger_infos" class="form_label"
                  >Beschreibung Wichtiger Infos
                </label>
                <textarea
                  class="form_input"
                  name="beschreibung_wichtiger_infos"
                  type="text"
                  [(ngModel)]="beschreibung_wichtiger_infos"
                  placeholder="Essen wird gestellt, Tom ist sehr verspielt und liebt es zu kuscheln 🐱🍲🎾"
                ></textarea>
                <label for="zeitdauer_von_bis" class="form_label"
                  >Zeitdauer von-bis</label
                >
                <textarea
                  class="form_input"
                  name="zeitdauer_von_bis"
                  type="text"
                  [(ngModel)]="zeitdauer_von_bis"
                  placeholder="z.B. Während den Sommerferien vom 10.07.2021 bis 30.07.2021 🏖️🐾🐱"
                ></textarea>
                <label for="totalbetrag_chf" class="form_label"
                  >Totalbetrag CHF</label
                >
                <textarea
                  class="form_input"
                  name="totalbetrag_chf"
                  type="text"
                  [(ngModel)]="totalbetrag_chf"
                  placeholder="z.B. 200CHF für 3 Wochen 🤑🐾🐱"
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
  styleUrl: "./ich-bin-tierbesitzer-inserieren.component.css",
})
export class IchBinTierbesitzerInserierenComponent {
  // Diese Variablen speichern die Eingaben des Benutzers
  titel: string = "";
  tiername: string = "";
  tierart: string = "";
  tierrasse: string = "";
  alter: string = "";
  zeitdauer_von_bis: string = "";
  beschreibung_wichtiger_infos: string = "";
  totalbetrag_chf: string = "";
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
        "image/jpg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/tiff",
        "image/x-icon",
        "image/vnd.djvu",
        "jpeg",
        "jpg",
        "png",
        "gif",
        "svg",
        "tiff",
        "x-icon",
        "vnd.djvu",
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
    // Überprüft, ob alle Felder ausgefüllt sind und ein Bild hochgeladen wurde
    if (
      !this.titel ||
      !this.tiername ||
      !this.tierart ||
      !this.tierrasse ||
      !this.alter ||
      !this.zeitdauer_von_bis ||
      !this.beschreibung_wichtiger_infos ||
      !this.totalbetrag_chf ||
      !this.bild
    ) {
      this.snackBar.open(
        "Bitte füllen Sie alle Felder aus und laden Sie ein Bild hoch",
        "OK",
        {
          duration: 5000,
          verticalPosition: "top",
          horizontalPosition: "center",
        }
      );
      return;
    }
    // Hier wird der Inserat erstellt
    const id = localStorage.getItem("id") || "";
    const data = {
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
    // Erstellt zuerst das Inserat
    this.http
      .post("http://localhost:1337/api/inserat-ich-bin-tierbesitzers", data)
      .subscribe((response: any) => {
        console.log(response);
        const inseratId = response.data.id; // ID des erstellten Inserats abrufen (wird für das Bild benötigt)
        const jwtToken = localStorage.getItem("token");
        console.log("JWT token wurde erfolgreich abgerufen:");
        console.log("Inserat ID wurde erfolgreich abgerufen");

        // Danach hochladen des Bildes und Zuordnung zum Inserat
        const formData = new FormData();
        if (this.bild) {
          console.log("Bild wurde erfolgreich ausgewählt", this.bild); // Überprüfen Sie, ob this.bild definiert ist
          console.log("Bild name:", this.bild.name); // Überprüfen Sie, ob this.bild.name definiert ist
          formData.append("files", this.bild, this.bild.name);
          formData.append(
            "ref",
            "api::inserat-ich-bin-tierbesitzer.inserat-ich-bin-tierbesitzer"
          );
          formData.append("refId", inseratId);
          formData.append("field", "bild");
        }
        // Das Bild wird hochgeladen
        this.http
          .post("http://localhost:1337/api/upload", formData, {
            headers: new HttpHeaders({
              Authorization: `Bearer ${jwtToken}`,
            }),
          })
          .subscribe(
            (response) => {
              console.log(response);
              this.snackBar
                .open("Inserat erstellt", "OK", {
                  duration: 3000,
                  verticalPosition: "top",
                  horizontalPosition: "center",
                })
                .afterDismissed()
                .subscribe(() => {
                  window.location.reload();
                  window.scrollTo(0, 0);
                });
              this.router.navigate(["/"]);
            },
            (error: any) => {
              console.log(error);
              this.snackBar.open("Fehler beim Hochladen des Bildes", "OK", {
                duration: 3000,
                verticalPosition: "top",
                horizontalPosition: "center",
              });
            }
          );
      });
  }
}
