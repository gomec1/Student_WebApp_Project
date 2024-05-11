import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";

@Component({
  selector: "app-tier-sitter-inserate",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hintergrundunten">
      <button class="filterbutton">
        <img
          class="filterzeichen"
          src="/assets/filterzeichen.png"
          alt="Filter Zeichen"
        />
      </button>

      <div class="inseratebox-container">
        <section
          *ngFor="let TiersitterInserateDaten of TiersitterInserateDatenList"
          class="inseratBoxen"
        >
          <img
            class="InseratFoto"
            [src]="TiersitterInserateDaten.photo"
            alt="Foto von {{ TiersitterInserateDaten.vorname }}"
          />
          <h1 class="inserateBoxenÜberschrift">
            Titel: {{ TiersitterInserateDaten.titel }}
          </h1>
          <p class="inserateBoxenOrt">Ort: {{ TiersitterInserateDaten.ort }}</p>
          <a
            class="MehrErfahrenButton"
            [routerLink]="[
              '/tiersitter-Inserat-details',
              TiersitterInserateDaten.id
            ]"
          >
            Mehr erfahren...
          </a>
        </section>
      </div>
    </section>
  `,
  styleUrl: "./tier-sitter-inserate.component.css",
})
export class TierSitterInserateComponent {
  @Input() TiersitterInserateDaten!: TiersitterInserateDaten;

  TiersitterInserateDatenList: TiersitterInserateDaten[] = [
    {
      id: 0,
      titel: "Ich suche nur Hunde",
      vorname: "Lars",
      name: "Lorch",
      verfügbarkeit: "Jeden Sonntag, den ganzen Tag",
      ort: "Bern",
      lohnkosten: "30 CHF pro Tag",
      persönliche_beschreibung: "Student, möchte was dazu verdienen",
      photo: "/assets/lars-lorch.png",
    },

    {
      id: 1,
      titel: "Ich liebe Katzen",
      vorname: "Sarah",
      name: "Held",
      verfügbarkeit: "30.05. Nachmittag",
      ort: "Bern",
      lohnkosten: "10 CHF pro stunde",
      persönliche_beschreibung: "Keine Zeit für eigene Tiere",
      photo: "/assets/sarah-held.png",
    },
    {
      id: 2,
      titel: "Ich liebe Katzen",
      vorname: "Sarah",
      name: "Held",
      verfügbarkeit: "30.05. Nachmittag",
      ort: "Bern",
      lohnkosten: "10 CHF pro stunde",
      persönliche_beschreibung: "Keine Zeit für eigene Tiere",
      photo: "/assets/sarah-held.png",
    },
    {
      id: 3,
      titel: "Ich liebe Katzen",
      vorname: "Sarah",
      name: "Held",
      verfügbarkeit: "30.05. Nachmittag",
      ort: "Bern",
      lohnkosten: "10 CHF pro stunde",
      persönliche_beschreibung: "Keine Zeit für eigene Tiere",
      photo: "/assets/sarah-held.png",
    },
    {
      id: 4,
      titel: "Ich liebe Katzen",
      vorname: "Sarah",
      name: "Held",
      verfügbarkeit: "30.05. Nachmittag",
      ort: "Bern",
      lohnkosten: "10 CHF pro stunde",
      persönliche_beschreibung: "Keine Zeit für eigene Tiere",
      photo: "/assets/sarah-held.png",
    },
    {
      id: 5,
      titel: "Ich liebe Katzen",
      vorname: "Sarah",
      name: "Held",
      verfügbarkeit: "30.05. Nachmittag",
      ort: "Bern",
      lohnkosten: "10 CHF pro stunde",
      persönliche_beschreibung: "Keine Zeit für eigene Tiere",
      photo: "/assets/sarah-held.png",
    },
  ];
}
