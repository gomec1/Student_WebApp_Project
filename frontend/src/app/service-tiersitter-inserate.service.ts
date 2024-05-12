import { Injectable } from "@angular/core";
import { TiersitterInserateDaten } from "./tiersitter-inserate-daten";

@Injectable({
  providedIn: "root",
})
export class ServiceTiersitterInserateService {
  protected TiersitterInserateDatenList: TiersitterInserateDaten[] = [
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
    {
      id: 6,
      titel: "Ich liebe Vögel",
      vorname: "Monika",
      name: "Held",
      verfügbarkeit: "30.05. Nachmittag",
      ort: "Bern",
      lohnkosten: "10 CHF pro stunde",
      persönliche_beschreibung: "Keine Zeit für eigene Tiere",
      photo: "/assets/sarah-held.png",
    },
  ];
  constructor() {}

  getAllTiersitterInserate(): TiersitterInserateDaten[] {
    return this.TiersitterInserateDatenList;
  }
  getTiersitterInserateById(id: number): TiersitterInserateDaten | undefined {
    return this.TiersitterInserateDatenList.find(
      (tiersitterInserateDaten) => tiersitterInserateDaten.id === id
    );
  }
}
