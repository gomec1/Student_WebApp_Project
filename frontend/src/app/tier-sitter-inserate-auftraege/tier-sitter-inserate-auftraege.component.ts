import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";
@Component({
  selector: "app-tier-sitter-inserate-auftraege",
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
          *ngFor="
            let TierSitterInseratAuftraegeDaten of TierSitterInseratAuftraegeDatenList
          "
          class="inseratBoxen"
        >
          <img
            class="InseratFoto"
            [src]="TierSitterInseratAuftraegeDaten.photo"
            alt="Foto von {{ TierSitterInseratAuftraegeDaten.tiername }}"
          />
          <h1 class="inserateBoxenÜberschrift">
            Titel: {{ TierSitterInseratAuftraegeDaten.titel }}
          </h1>
          <p class="inserateBoxenOrt">
            Ort: {{ TierSitterInseratAuftraegeDaten.ort }}
          </p>
          <a
            class="MehrErfahrenButton"
            [routerLink]="[
              '/Tiersitter-Inserat-Aufträge-details',
              TierSitterInseratAuftraegeDaten.id
            ]"
          >
            Mehr erfahren...
          </a>
        </section>
      </div>
    </section>
  `,
  styleUrl: "./tier-sitter-inserate-auftraege.component.css",
})
export class TierSitterInserateAuftraegeComponent {
  @Input() TierSitterInseratAuftraegeDaten!: TierSitterInseratAuftraegeDaten;

  TierSitterInseratAuftraegeDatenList: TierSitterInseratAuftraegeDaten[] = [
    {
      id: 0,
      titel: "Spazieren mit Sayra",
      tiername: "Sayra",
      tierart: "Hund",
      tierrasse: "Golden Retriever",
      alter: "4 Jahre",
      Zeitdauer_von_bis: "Jeden Montag, Nachmittag",
      beschreibung_wichtiger_infos:
        "Geimpft, sehr freundlich, liebt es zu spielen",
      ort: "Bern",
      totalbetrag_CHF: "50 CHF",
      photo: "/assets/sayrahund.JPG",
    },
    {
      id: 1,
      titel: "Spielen mit Sayra",
      tiername: "Sayra",
      tierart: "Hund",
      tierrasse: "Golden Retriever",
      alter: "4 Jahre",
      Zeitdauer_von_bis: "Jeden Montag, Nachmittag",
      beschreibung_wichtiger_infos:
        "Geimpft, sehr freundlich, liebt es zu spielen",
      ort: "Belp",
      totalbetrag_CHF: "50 CHF",
      photo: "/assets/sayrahund.JPG",
    },
    {
      id: 2,
      titel: "Gassi gehen mit Sayra",
      tiername: "Sayra",
      tierart: "Hund",
      tierrasse: "Golden Retriever",
      alter: "4 Jahre",
      Zeitdauer_von_bis: "Jeden Montag, Nachmittag",
      beschreibung_wichtiger_infos:
        "Geimpft, sehr freundlich, liebt es zu spielen",
      ort: "Spiez",
      totalbetrag_CHF: "50 CHF",
      photo: "/assets/sayrahund.JPG",
    },
    {
      id: 3,
      titel: "Sayra zum arzt bringen",
      tiername: "Sayra",
      tierart: "Hund",
      tierrasse: "Golden Retriever",
      alter: "4 Jahre",
      Zeitdauer_von_bis: "Jeden Montag, Nachmittag",
      beschreibung_wichtiger_infos:
        "Geimpft, sehr freundlich, liebt es zu spielen",
      ort: "Muri",
      totalbetrag_CHF: "50 CHF",
      photo: "/assets/sayrahund.JPG",
    },
    {
      id: 4,
      titel: "Spazieren mit Sayra",
      tiername: "Sayra",
      tierart: "Hund",
      tierrasse: "Golden Retriever",
      alter: "4 Jahre",
      Zeitdauer_von_bis: "Jeden Montag, Nachmittag",
      beschreibung_wichtiger_infos:
        "Geimpft, sehr freundlich, liebt es zu spielen",
      ort: "Bern",
      totalbetrag_CHF: "50 CHF",
      photo: "/assets/sayrahund.JPG",
    },
    {
      id: 5,
      titel: "kuscheln mit Luna",
      tiername: "Luna",
      tierart: "Katze",
      tierrasse: "Golden Retriever",
      alter: "4 Jahre",
      Zeitdauer_von_bis: "Jeden Montag, Nachmittag",
      beschreibung_wichtiger_infos:
        "Geimpft, sehr freundlich, liebt es zu spielen",
      ort: "Amsterdam",
      totalbetrag_CHF: "50 CHF",
      photo: "/assets/Luna.JPG",
    },
  ];
}
