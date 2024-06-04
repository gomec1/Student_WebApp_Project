import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";
import { ServiceTiersitterInserateAuftraegeService } from "../services/service-tiersitter-inserate-auftraege.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tier-sitter-inserate-auftraege",
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClient, ServiceTiersitterInserateAuftraegeService],
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
          class="inseratBoxen"
          *ngFor="let inserat of tierSitterInseratAuftraegeDatenList"
        >
          <img
            class="InseratFoto"
            [src]="
              'http://localhost:1337' +
              inserat.attributes.bild.data[0].attributes.url
            "
            [alt]="
              'http://localhost:1337' +
              inserat.attributes.bild.data[0].attributes.url
            "
          />
          <h1 class="inserateBoxenÜberschrift">
            Titel: {{ inserat.attributes.titel }}
          </h1>
          <p class="inserateBoxenOrt">
            Ort:
            {{ inserat.attributes.user.data.attributes.ort }}
          </p>
          <a
            class="MehrErfahrenButton"
            [routerLink]="'/Tiersitter-Inserat-Aufträge-details/' + inserat.id"
          >
            Mehr erfahren...
          </a>
        </section>
      </div>
    </section>
  `,
  styleUrl: "./tier-sitter-inserate-auftraege.component.css",
})
export class TierSitterInserateAuftraegeComponent implements OnInit {
  tierSitterInseratAuftraegeDatenList: TierSitterInseratAuftraegeDaten[] = [];

  constructor(
    private serviceTiersitterInserateAuftraegeService: ServiceTiersitterInserateAuftraegeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.serviceTiersitterInserateAuftraegeService
      .getAllTierSitterInseratAuftraege()
      .subscribe(
        (data) => {
          this.tierSitterInseratAuftraegeDatenList = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
