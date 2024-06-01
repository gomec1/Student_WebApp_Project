import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ServiceTiersitterInserateAuftraegeService } from "../services/service-tiersitter-inserate-auftraege.service";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tier-sitter-inserat-auftraege-details",
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClient, ServiceTiersitterInserateAuftraegeService],
  template: `
    <article
      class="hintergrundunten"
      *ngIf="tierSitterInseratAuftraegeDaten.id"
    >
      <section class="listing-beschreibung1">
        <img
          class="listing-fotoTier"
          [src]="
            'http://localhost:1337' +
            tierSitterInseratAuftraegeDaten.attributes.bild.data[0].attributes
              .url
          "
          [alt]="
            'http://localhost:1337' +
            tierSitterInseratAuftraegeDaten.attributes.bild.data[0].attributes
              .url
          "
        />

        <h2 class="listing-haupttitel">
          {{ tierSitterInseratAuftraegeDaten.attributes.titel }}
        </h2>
        <h2 class="listing-titel">Name</h2>
        <p class="bescheibung1">
          {{ tierSitterInseratAuftraegeDaten.attributes.tiername }}
        </p>
        <h2 class="listing-titel">Alter</h2>
        <p class="bescheibung1">
          {{ tierSitterInseratAuftraegeDaten.attributes.alter }}
        </p>
        <h2 class="listing-titel">Tierart</h2>
        <p class="bescheibung1">
          {{ tierSitterInseratAuftraegeDaten.attributes.tierart }}
        </p>
        <h2 class="listing-titel">Ort</h2>
        <p class="bescheibung1">
          {{
            tierSitterInseratAuftraegeDaten.attributes.users_permissions_user
              .data.attributes.ort
          }}
        </p>
      </section>

      <section class="listing-beschreibung2">
        <h2 class="listing-titel">Beschreibung wichtiger Informationen</h2>
        <p class="beschreibung2">
          {{
            tierSitterInseratAuftraegeDaten.attributes
              .beschreibung_wichtiger_infos
          }}
        </p>
        <h2 class="listing-titel">Zeitdauer</h2>
        <p class="beschreibung2">
          {{ tierSitterInseratAuftraegeDaten.attributes.zeitdauer_von_bis }}
        </p>
        <h2 class="listing-titel">Totalbetrag</h2>
        <p class="bescheibung2">
          {{ tierSitterInseratAuftraegeDaten.attributes.totalbetrag_chf }}
        </p>
        <h2 class="listing-titel">Tierrasse</h2>
        <p class="bescheibung2">
          {{ tierSitterInseratAuftraegeDaten.attributes.tierrasse }}
        </p>
        <h2 class="listing-applytitel">
          Möchtest du mit
          {{ tierSitterInseratAuftraegeDaten.attributes.tiername }} Zeit
          verbringen?
        </h2>
        <button class="primary" type="button">Buchen</button>
      </section>
    </article>
  `,
  styleUrl: "./tier-sitter-inserat-auftraege-details.component.css",
})
export class TierSitterInseratAuftraegeDetailsComponent implements OnInit {
  tierSitterInseratAuftraegeDaten: TierSitterInseratAuftraegeDaten =
    {} as TierSitterInseratAuftraegeDaten;

  constructor(
    private serviceTiersitterInserateAuftraegeService: ServiceTiersitterInserateAuftraegeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const tiersitterInserateAuftraegeId = Number(
      this.route.snapshot.params["id"]
    );
    this.serviceTiersitterInserateAuftraegeService
      .getTierSitterInseratAuftraegeById(tiersitterInserateAuftraegeId)
      .subscribe(
        (data) => {
          this.tierSitterInseratAuftraegeDaten = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
