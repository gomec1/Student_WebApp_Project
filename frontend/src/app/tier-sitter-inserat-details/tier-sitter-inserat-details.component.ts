import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { ServiceTiersitterInserateService } from "../services/service-tiersitter-inserate.service";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-tier-sitter-inserat-details",
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClient, ServiceTiersitterInserateService],
  template: `
    <article class="hintergrundunten" *ngIf="tierSitterInserateDaten.id">
      <section class="listing-beschreibung1">
        <img
          class="listing-fotoTiersitter"
          [src]="
            'http://localhost:1337' +
            tierSitterInserateDaten.attributes.bild.data[0].attributes.url
          "
          alt="Foto"
        />
        <h2 class="listing-haupttitel">
          {{ tierSitterInserateDaten.attributes.titel }}
        </h2>
        <h2 class="listing-titel">Vorname / Name:</h2>
        <p class="beschreibung1">
          {{ tierSitterInserateDaten.attributes.user.data.attributes.vorname }}
          {{ tierSitterInserateDaten.attributes.user.data.attributes.name }}
        </p>
        <h2 class="listing-titel">Ort:</h2>
        <p class="beschreibung1">
          {{ tierSitterInserateDaten.attributes.user.data.attributes.ort }}
        </p>
      </section>

      <section class="listing-beschreibung2">
        <h2 class="listing-titel">Persönliche Beschreibung:</h2>
        <p class="beschreibung2">
          {{ tierSitterInserateDaten.attributes.persoenliche_beschreibung }}
        </p>
        <h2 class="listing-titel">Verfügbarkeit:</h2>
        <p class="beschreibung2">
          {{ tierSitterInserateDaten.attributes.verfuegbarkeit }}
        </p>
        <h2 class="listing-titel">Lohnkosten:</h2>
        <p class="beschreibung2">
          {{ tierSitterInserateDaten.attributes.lohnkosten }}
        </p>
        <h2 class="listing-applytitel">
          Kontaktiere
          {{ tierSitterInserateDaten.attributes.user.data.attributes.vorname }}
          um auf dein Tier aufzupassen!
        </h2>
        <button class="primary" type="button">Buchen</button>
      </section>
    </article>
  `,
  styleUrl: "./tier-sitter-inserat-details.component.css",
})
export class TierSitterInseratDetailsComponent implements OnInit {
  tierSitterInserateDaten: TiersitterInserateDaten =
    {} as TiersitterInserateDaten;

  constructor(
    private serviceTiersitterInserateService: ServiceTiersitterInserateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const tiersitterInserateId = Number(this.route.snapshot.params["id"]);
    this.serviceTiersitterInserateService
      .getTiersitterInserateById(tiersitterInserateId)
      .subscribe(
        (data) => {
          this.tierSitterInserateDaten = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

// route: ActivatedRoute = inject(ActivatedRoute);
// serviceTiersitterInserateService = inject(ServiceTiersitterInserateService);
// tierSitterInserateDaten: TiersitterInserateDaten | undefined;
// constructor() {
//   const tiersitterInserateId = Number(this.route.snapshot.params["id"]);
//   this.tierSitterInserateDaten =
//     this.serviceTiersitterInserateService.getTiersitterInserateById(
//       tiersitterInserateId
//     );
// }
