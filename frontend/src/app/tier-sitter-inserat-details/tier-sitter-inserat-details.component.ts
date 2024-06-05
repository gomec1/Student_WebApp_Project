import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { ServiceTiersitterInserateService } from "../services/service-tiersitter-inserate.service";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { DialogBeforeRequest } from "../confirm-dialog/confirm-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-tier-sitter-inserat-details",
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [
    HttpClient,
    ServiceTiersitterInserateService,
    DialogBeforeRequest,
  ],
  template: `
    <article class="hintergrundunten" *ngIf="tierSitterInserateDaten.id">
      <section class="listing-beschreibung1">
        <img
          class="listing-fotoTiersitter"
          [src]="
            'http://localhost:1337' +
            tierSitterInserateDaten.attributes.bild.data[0].attributes.url
          "
          [alt]="
            'http://localhost:1337' +
            tierSitterInserateDaten.attributes.bild.data[0].attributes.url
          "
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
        <button class="primary" type="button" (click)="openDialogToRequest()">
          Anfragen
        </button>
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
  // Damit wird die Anfrage erstellt und an den Tiersitter gesendet
  onRequestButtonClick() {
    const inseratId = this.tierSitterInserateDaten.id;
    const userAId = Number(localStorage.getItem("id"));
    const userBId = this.tierSitterInserateDaten.attributes.user.data.id;
    const requestData = {
      data: {
        fromUser: userAId,
        toUser: userBId,
        inserat: inseratId,
      },
    };
    this.http
      .post("http://localhost:1337/api/notifications", requestData, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
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
