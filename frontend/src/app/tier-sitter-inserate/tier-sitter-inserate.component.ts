import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";
import { ServiceTiersitterInserateService } from "../services/service-tiersitter-inserate.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tier-sitter-inserate",
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClient, ServiceTiersitterInserateService],
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
          *ngFor="let inserat of tierSitterInserateDatenList"
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
            Ort: {{ inserat.attributes.user.data.attributes.ort }}
          </p>
          <a
            class="MehrErfahrenButton"
            [routerLink]="'/tiersitter-Inserat-details/' + inserat.id"
          >
            Mehr erfahren...
          </a>
        </section>
      </div>
    </section>
  `,
  styleUrl: "./tier-sitter-inserate.component.css",
})
export class TierSitterInserateComponent implements OnInit {
  tierSitterInserateDatenList: TiersitterInserateDaten[] = [];

  constructor(
    private serviceTiersitterInserateService: ServiceTiersitterInserateService,
    private http: HttpClient
  ) {}
  // Methode um alle TiersitterInserate zu bekommen
  ngOnInit() {
    this.serviceTiersitterInserateService.getAllTiersitterInserate().subscribe(
      (data) => {
        this.tierSitterInserateDatenList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
