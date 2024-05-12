import { Injectable } from "@angular/core";
import { TierSitterInseratAuftraegeDaten } from "./tier-sitter-inserat-auftraege-daten";

@Injectable({
  providedIn: "root",
})
export class ServiceTiersitterInserateAuftraegeService {
  protected TiersitterInserateAuftraegeDatenList: TierSitterInseratAuftraegeDaten[] =
    [
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

  constructor() {}

  getAllTiersitterInserateAuftraege(): TierSitterInseratAuftraegeDaten[] {
    return this.TiersitterInserateAuftraegeDatenList;
  }
  getTiersitterInserateAuftraegeById(
    id: number
  ): TierSitterInseratAuftraegeDaten | undefined {
    return this.TiersitterInserateAuftraegeDatenList.find(
      (tiersitterInserateAuftraegeDaten) =>
        tiersitterInserateAuftraegeDaten.id === id
    );
  }
}
