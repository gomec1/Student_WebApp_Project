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
    <article>
      <img
        class="listing-fotoTiersitter"
        [src]="tierSitterInserateDaten?.photo"
        alt="Foto"
      />

      <section class="listing-beschreibung">
        <h2 class="listing-titel">
          {{ tierSitterInserateDaten?.titel }}
        </h2>
      </section>

      <section class="listing-apply">
        <h2 class="section-heading">
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
