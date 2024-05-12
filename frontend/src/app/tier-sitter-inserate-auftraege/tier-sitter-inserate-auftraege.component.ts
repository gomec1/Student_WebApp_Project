import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";
import { ServiceTiersitterInserateAuftraegeService } from "../service-tiersitter-inserate-auftraege.service";

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
  TierSitterInseratAuftraegeDatenList: TierSitterInseratAuftraegeDaten[] = [];
  ServiceTiersitterInserateAuftraegeService: ServiceTiersitterInserateAuftraegeService =
    inject(ServiceTiersitterInserateAuftraegeService);

  constructor() {
    this.TierSitterInseratAuftraegeDatenList =
      this.ServiceTiersitterInserateAuftraegeService.getAllTiersitterInserateAuftraege();
  }
}
