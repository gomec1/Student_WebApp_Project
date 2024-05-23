import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ServiceTiersitterInserateAuftraegeService } from "../services/service-tiersitter-inserate-auftraege.service";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";

@Component({
  selector: "app-tier-sitter-inserat-auftraege-details",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="hintergrundunten">
      <section class="listing-beschreibung1">
        <img
          class="listing-fotoTier"
          [src]="tierSitterInseratAuftraegeDaten?.photo"
          alt="Foto"
        />

        <h2 class="listing-haupttitel">
          {{ tierSitterInseratAuftraegeDaten?.titel }}
        </h2>
        <h2 class="listing-titel">Name</h2>
        <p class="bescheibung1">
          {{ tierSitterInseratAuftraegeDaten?.tiername }}
        </p>
        <h2 class="listing-titel">Alter</h2>
        <p class="bescheibung1">
          {{ tierSitterInseratAuftraegeDaten?.alter }}
        </p>
        <h2 class="listing-titel">Tierart</h2>
        <p class="bescheibung1">
          {{ tierSitterInseratAuftraegeDaten?.tierart }}
        </p>
        <h2 class="listing-titel">Ort</h2>
        <p class="bescheibung1">
          {{ tierSitterInseratAuftraegeDaten?.ort }}
        </p>
      </section>

      <section class="listing-beschreibung2">
        <h2 class="listing-titel">Beschreibung wichtiger Informationen</h2>
        <p class="beschreibung2">
          {{ tierSitterInseratAuftraegeDaten?.beschreibung_wichtiger_infos }}
        </p>
        <h2 class="listing-titel">Zeitdauer</h2>
        <p class="beschreibung2">
          {{ tierSitterInseratAuftraegeDaten?.Zeitdauer_von_bis }}
        </p>
        <h2 class="listing-titel">Totalbetrag</h2>
        <p class="bescheibung2">
          {{ tierSitterInseratAuftraegeDaten?.totalbetrag_CHF }}
        </p>
        <h2 class="listing-titel">Tierrasse</h2>
        <p class="bescheibung2">
          {{ tierSitterInseratAuftraegeDaten?.tierrasse }}
        </p>
        <h2 class="listing-applytitel">
          Möchtest du mit {{ tierSitterInseratAuftraegeDaten?.tiername }} Zeit
          verbringen?
        </h2>
        <button class="primary" type="button">Buchen</button>
      </section>
    </article>
  `,
  styleUrl: "./tier-sitter-inserat-auftraege-details.component.css",
})
export class TierSitterInseratAuftraegeDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  serviceTiersitterInserateAuftraegeService = inject(
    ServiceTiersitterInserateAuftraegeService
  );
  tierSitterInseratAuftraegeDaten: TierSitterInseratAuftraegeDaten | undefined;
  grimacingFaceEmoji: any;

  constructor() {
    const tierSitterInseratAuftraegeId = Number(
      this.route.snapshot.params["id"]
    );
    this.tierSitterInseratAuftraegeDaten =
      this.serviceTiersitterInserateAuftraegeService.getTiersitterInserateAuftraegeById(
        tierSitterInseratAuftraegeId
      );
  }
}
