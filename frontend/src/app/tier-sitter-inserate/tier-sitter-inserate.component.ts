import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";
import { ServiceTiersitterInserateService } from "../services/service-tiersitter-inserate.service";

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
  TiersitterInserateDatenList: TiersitterInserateDaten[] = [];
  ServiceTiersitterInserateService: ServiceTiersitterInserateService = inject(
    ServiceTiersitterInserateService
  );

  constructor() {
    this.TiersitterInserateDatenList =
      this.ServiceTiersitterInserateService.getAllTiersitterInserate();
  }
}
