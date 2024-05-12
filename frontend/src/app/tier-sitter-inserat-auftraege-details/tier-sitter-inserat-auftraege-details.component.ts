import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ServiceTiersitterInserateAuftraegeService } from "../service-tiersitter-inserate-auftraege.service";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";

@Component({
  selector: "app-tier-sitter-inserat-auftraege-details",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p>
      tier-sitter-inserat-auftraege-details works!
      {{ tierSitterInseratAuftraegeDaten?.id }}
    </p>
  `,
  styleUrl: "./tier-sitter-inserat-auftraege-details.component.css",
})
export class TierSitterInseratAuftraegeDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  serviceTiersitterInserateAuftraegeService = inject(
    ServiceTiersitterInserateAuftraegeService
  );
  tierSitterInseratAuftraegeDaten: TierSitterInseratAuftraegeDaten | undefined;

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
