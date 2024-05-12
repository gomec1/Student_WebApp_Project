import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ServiceTiersitterInserateService } from "../service-tiersitter-inserate.service";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";

@Component({
  selector: "app-tier-sitter-inserat-details",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="hintergrundunten">
      <section class="listing-beschreibung1">
        <img
          class="listing-fotoTiersitter"
          [src]="tierSitterInserateDaten?.photo"
          alt="Foto"
        />
        <h2 class="listing-haupttitel">
          {{ tierSitterInserateDaten?.titel }}
        </h2>
        <h2 class="listing-titel">Vorname / Name:</h2>
        <p class="beschreibung1">
          {{ tierSitterInserateDaten?.vorname }}
          {{ tierSitterInserateDaten?.name }}
        </p>
        <h2 class="listing-titel">Ort:</h2>
        <p class="beschreibung1">
          {{ tierSitterInserateDaten?.ort }}
        </p>
      </section>

      <section class="listing-beschreibung2">
        <h2 class="listing-titel">Persönliche Beschreibung:</h2>
        <p class="beschreibung2">
          {{ tierSitterInserateDaten?.persoenliche_beschreibung }}
        </p>
        <h2 class="listing-titel">Verfügbarkeit:</h2>
        <p class="beschreibung2">
          {{ tierSitterInserateDaten?.verfuegbarkeit }}
        </p>
        <h2 class="listing-titel">Lohnkosten:</h2>
        <p class="beschreibung2">{{ tierSitterInserateDaten?.lohnkosten }}</p>
        <h2 class="listing-applytitel">
          Kontaktiere {{ tierSitterInserateDaten?.vorname }} um auf dein Tier
          aufzupassen!
        </h2>
        <button class="primary" type="button">Buchen</button>
      </section>
    </article>
  `,
  styleUrl: "./tier-sitter-inserat-details.component.css",
})
export class TierSitterInseratDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  serviceTiersitterInserateService = inject(ServiceTiersitterInserateService);
  tierSitterInserateDaten: TiersitterInserateDaten | undefined;

  constructor() {
    const tiersitterInserateId = Number(this.route.snapshot.params["id"]);
    this.tierSitterInserateDaten =
      this.serviceTiersitterInserateService.getTiersitterInserateById(
        tiersitterInserateId
      );
  }
}
