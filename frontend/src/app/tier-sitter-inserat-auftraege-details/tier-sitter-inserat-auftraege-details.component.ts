import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ServiceTiersitterInserateAuftraegeService } from "../services/service-tiersitter-inserate-auftraege.service";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { DialogBeforeRequest } from "../confirm-dialog/confirm-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-tier-sitter-inserat-auftraege-details",
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [
    HttpClient,
    ServiceTiersitterInserateAuftraegeService,
    DialogBeforeRequest,
  ],
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
            tierSitterInseratAuftraegeDaten.attributes.user.data.attributes.ort
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
        <button class="primary" type="button" (click)="openDialogToRequest()">
          Anfragen
        </button>
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
    private route: ActivatedRoute,
    private http: HttpClient,
    public dialogBeforeRequest: DialogBeforeRequest,
    public dialog: MatDialog,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  //Damit wird die Notification erstellt, das der eingeloggte User gerne eine Anfrage stellen möchte
  openDialogToRequest(): void {
    if (this.authService.isLoggedIn) {
      const dialogRef = this.dialog.open(DialogBeforeRequest, {
        width: "600px",
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.onRequestButtonClick();
          console.log("Anfrage gesendet", result);
          this.snackBar
            .open(
              "Anfrage gesendet, der Inseratersteller wird sich bei dir melden!",
              "OK",
              {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "top",
              }
            )
            .afterDismissed()
            .subscribe(() => {
              window.scrollTo(0, 0);
            });
        }
      });
    } else {
      this.authService.openSnackBar(
        "Bitte einloggen, um eine Anfrage zu stellen",
        "OK",
        {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top",
        }
      );
    }
  }

  onRequestButtonClick() {
    const inseratId = this.tierSitterInseratAuftraegeDaten.id;
    const userAId = Number(localStorage.getItem("id"));
    const userBId =
      this.tierSitterInseratAuftraegeDaten.attributes.user.data.id;
    const requestData = {
      data: {
        fromUser: userAId,
        toUser: userBId,
        inserat: inseratId,
      },
    };
    this.http
      .post(
        "http://localhost:1337/api/notification-tierbesitzers",
        requestData,
        {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
          }),
        }
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }

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
