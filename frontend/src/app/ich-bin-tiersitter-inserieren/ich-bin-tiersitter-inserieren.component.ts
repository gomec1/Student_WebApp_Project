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
      <h1 class="maintitel">
        Inserieren - Ich bin ein Tiersitter und suche ein Tier zum hüten
      </h1>

      <form class="form-container" (ngSubmit)="onSubmit()">
        <section class="column1">
          <label for="titel" class="schrift">Titel (Ich suche...)</label>
          <input
            class="eingabefelder"
            name="titel"
            type="text"
            [(ngModel)]="titel"
          />

          <label for="persoenlicheBeschreibung" class="schrift"
            >Persönliche Beschreibung</label
          >
          <input
            class="eingabefelder"
            name="persoenlicheBeschreibung"
            type="text"
            [(ngModel)]="persoenliche_beschreibung"
          />
        </section>
        <section class="column2">
          <label for="verfuegbarkeit" class="schrift">Verfügbarkeit</label>
          <input
            class="eingabefelder"
            name="verfuegbarkeit"
            type="text"
            [(ngModel)]="verfuegbarkeit"
          />

          <label for="Lohnkosten" class="schrift">Lohnkosten</label>
          <input
            class="eingabefelder"
            name="Lohnkosten"
            type="text"
            [(ngModel)]="lohnkosten"
          />
        </section>

        <section class="column3">
          <p>Platzhalter, später Bild einfügen</p>
        </section>
        <input class="submit" type="submit" value="Submit" />
      </form>
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
