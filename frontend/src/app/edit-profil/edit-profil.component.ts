import { Component, OnInit } from "@angular/core";
import { CommonModule, NgIf } from "@angular/common";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { ReactiveFormsModule, FormBuilder, FormGroup } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { DialogDeleteProfile } from "../confirm-dialog/confirm-dialog.component";
import { AuthService } from "../services/auth.service";
import { forkJoin } from "rxjs";
import { ServiceTiersitterInserateService } from "../services/service-tiersitter-inserate.service";
import { TiersitterInserateDaten } from "../tiersitter-inserate-daten";
import { ServiceTiersitterInserateAuftraegeService } from "../services/service-tiersitter-inserate-auftraege.service";
import { TierSitterInseratAuftraegeDaten } from "../tier-sitter-inserat-auftraege-daten";

@Component({
  selector: "app-edit-profil",
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    NgIf,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClient,
    ServiceTiersitterInserateService,
    ServiceTiersitterInserateAuftraegeService,
    MatDialog,
  ],

  template: `
    <div *ngIf="authService.isLoggedIn; else notLoggedIn">
      <section class="hintergrundunten" *ngIf="user">
        <dt>
          <h1 class="titel"><strong>Profil bearbeiten 🔨</strong></h1>
        </dt>
        <form [formGroup]="userForm" (ngSubmit)="updateUser()">
          <div class="table_container">
            <table>
              <div class="image-upload">
                <input
                  type="file"
                  class="image-upload__input"
                  (change)="onFileSelected($event)"
                />
                <img
                  class="profilbild image-upload__image "
                  [src]="
                    user && user.profilfoto
                      ? 'http://localhost:1337' + user.profilfoto.url
                      : 'default-image-url'
                  "
                />
                <p class="pb_wechseln_schrift">Profilbild wechseln ⬆️</p>
              </div>

              <td>
                <p></p>
              </td>

              <tr>
                <td>
                  <label class="form_label" for="username">Username </label>
                </td>
                <td>
                  <input
                    class="form_input"
                    id="username"
                    type="text"
                    formControlName="username"
                    autocomplete="username"
                  />
                </td>
              </tr>

              <tr>
                <td><label class="form_label" for="email">Email </label></td>
                <td>
                  <input
                    id="email"
                    class="form_input"
                    type="email"
                    name="email"
                    formControlName="email"
                    autocomplete="email"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="password">Passwort </label>
                </td>
                <td>
                  <input
                    name="password"
                    class="form_input"
                    id="password"
                    type="password"
                    formControlName="password"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="telefonnummer">Tel. </label>
                </td>
                <td>
                  <input
                    id="telefonnummer"
                    name="telefonnummer"
                    class="form_input"
                    type="string"
                    formControlName="telefonnummer"
                  />
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <label class="form_label" for="vorname">Vorname </label>
                </td>
                <td>
                  <input
                    id="vorname"
                    name="vorname"
                    class="form_input"
                    type="text"
                    formControlName="vorname"
                  />
                </td>
              </tr>

              <tr>
                <td><label class="form_label" for="name">Name </label></td>
                <td>
                  <input
                    id="name"
                    name="name"
                    class="form_input"
                    type="text"
                    formControlName="name"
                    autocomplete="name"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="geburtsdatum">Geb. </label>
                </td>
                <td>
                  <input
                    id="geburtsdatum"
                    name="geburtsdatum"
                    class="form_input"
                    type="text"
                    formControlName="geburtsdatum"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="strasseNr">Strasse+Nr </label>
                </td>
                <td>
                  <input
                    id="strasseNr"
                    name="strasseNr"
                    class="form_input"
                    type="text"
                    formControlName="strasseNr"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="postleitzahl">PLZ </label>
                </td>
                <td>
                  <input
                    id="postleitzahl"
                    name="postleitzahl"
                    class="form_input"
                    type="number"
                    formControlName="postleitzahl"
                  />
                </td>
              </tr>

              <tr>
                <td><label class="form_label" for="ort">Ort </label></td>
                <td>
                  <input
                    id="ort"
                    name="ort"
                    class="form_input"
                    type="text"
                    formControlName="ort"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label class="form_label" for="rolle_dropdown">Rolle </label>
                </td>
                <td>
                  <select
                    name="rolle"
                    id="rolle_dropdown"
                    formControlName="rolle"
                  >
                    <option value="Ich bin Tiersitter">
                      Ich bin Tiersitter
                    </option>
                    <option value="Ich bin Tierbesitzer">
                      Ich bin Tierbesitzer
                    </option>
                    <option value="beides">beides</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="buttons">
                  <button class="backToProfil" routerLink="/">Zurück</button>
                </td>
                <td class="buttons">
                  <button id="button_submit" type="submit">Speichern</button>

                  <button
                    class="button_delete buttons"
                    type="button"
                    (click)="dialogToDeleteProfile()"
                  >
                    Löschen
                  </button>
                </td>
              </tr>
            </table>
            <!-- Anzeige der Inserate des Benutzers -->
            <!-- Zuerst die Inserate als Tierbesitzer -->
            <table>
              <h2 class="titel_bestehende_inserate">
                Inserate als Tierbesitzer 🦥
              </h2>
              <ng-container
                *ngIf="inserateTierbesitzer.length > 0; else noInserate"
              >
                <div class="bestehende_inserate_container">
                  <div
                    class="bestehende_inserate"
                    *ngFor="let inserat2 of inserateTierbesitzer"
                  >
                    <p class="inseratTitel">{{ inserat2.attributes.titel }}</p>
                    <div class="table_container_inserate">
                      <table>
                        <img
                          class="inseratFotoTiersitter"
                          [src]="
                            'http://localhost:1337' +
                            inserat2.attributes.bild.data[0].attributes.url
                          "
                          [alt]="
                            'http://localhost:1337' +
                            inserat2.attributes.bild.data[0].attributes.url
                          "
                        />
                      </table>
                      <table>
                        <p class="inseratInhalt">
                          <strong>Name:</strong>
                          {{ inserat2.attributes.tiername }}
                        </p>
                        <p class="inseratInhalt">
                          <strong>Art:</strong>
                          {{ inserat2.attributes.tierart }}
                        </p>
                        <p class="inseratInhalt">
                          <strong>Zeitdauer-von-bis:</strong>
                          {{ inserat2.attributes.zeitdauer_von_bis }}
                        </p>
                      </table>
                    </div>
                    <button
                      class="button_in_inserat bearbeiten"
                      routerLink="/inserat-tierbesitzer-bearbeiten"
                    >
                      Bearbeiten
                    </button>
                    <button
                      type="button"
                      mat-raised-button
                      (click)="openDialogToDelete(inserat2.id, 'tierbesitzer')"
                      class="button_in_inserat loeschen"
                    >
                      Löschen
                    </button>
                  </div>
                </div>
              </ng-container>

              <!--  Danach die Inserate als Tiersitter -->
              <h2 class="titel_bestehende_inserate">
                Inserate als Tiersitter 🦖
              </h2>
              <ng-container
                *ngIf="inserateTierSitter.length > 0; else noInserate"
              >
                <div class="bestehende_inserate_container">
                  <div
                    class="bestehende_inserate"
                    *ngFor="let inserat1 of inserateTierSitter"
                  >
                    <p class="inseratTitel">{{ inserat1.attributes.titel }}</p>
                    <div class="table_container_inserate">
                      <table>
                        <img
                          class="inseratFotoTiersitter"
                          [src]="
                            'http://localhost:1337' +
                            inserat1.attributes.bild.data[0].attributes.url
                          "
                          [alt]="
                            'http://localhost:1337' +
                            inserat1.attributes.bild.data[0].attributes.url
                          "
                        />
                      </table>
                      <table>
                        <p class="inseratInhalt">
                          <strong> Verfügbarkeit:</strong>
                          {{ inserat1.attributes.verfuegbarkeit }}
                        </p>
                        <p class="inseratInhalt">
                          <strong> Lohn: </strong
                          >{{ inserat1.attributes.lohnkosten }}
                        </p>
                        <p class="inseratInhalt">
                          <strong>Persönl. Beschr.:</strong>
                          {{ inserat1.attributes.persoenliche_beschreibung }}
                        </p>
                      </table>
                    </div>
                    <button
                      class="button_in_inserat bearbeiten"
                      routerLink="/inserat-tiersitter-bearbeiten"
                    >
                      Bearbeiten
                    </button>
                    <button
                      type="button"
                      mat-raised-button
                      (click)="openDialogToDelete(inserat1.id, 'tiersitter')"
                      class="button_in_inserat loeschen"
                    >
                      Löschen
                    </button>
                  </div>
                </div>
              </ng-container>
              <ng-template #noInserate>
                <div class="keine_inserate">Keine Inserate vorhanden</div>
              </ng-template>
            </table>
          </div>
        </form>
      </section>
    </div>
    <!-- Alternativer Inhalt, wenn der Benutzer nicht eingeloggt ist: -->
    <ng-template #notLoggedIn>
      <section class="hintergrundunten">
        <p class="nichteigeloggt">Nicht eingeloggt 😞</p>
        <section></section></section
    ></ng-template>
  `,
  styleUrl: "./edit-profil.component.css",
})
export class EditProfilComponent implements OnInit {
  inserateTierSitter: TiersitterInserateDaten[] = [];
  inserateTierbesitzer: TierSitterInseratAuftraegeDaten[] = [];
  selectedInseratId: number = 0;
  selectedInseratType: "tiersitter" | "tierbesitzer" | null = null;
  user: any;
  userForm: FormGroup;
  profilfoto: File | null = null;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    private router: Router,
    public serviceTiersitterInserateService: ServiceTiersitterInserateService,
    public ServiceTiersitterInserateAuftraegeService: ServiceTiersitterInserateAuftraegeService,
    public dialog: MatDialog
  ) {
    //Damit wird das Formular mit den Momentanen Benutzerdaten initialisiert
    this.userForm = this.formBuilder.group({
      username: "",
      email: "",
      password: "",
      telefonnummer: "",
      vorname: "",
      name: "",
      geburtsdatum: "",
      strasseNr: "",
      postleitzahl: "",
      ort: "",
      rolle: "",
    });
  }
  // Dialog das den Benutzer fragt, ob er das Inserat wirklich löschen möchte
  openDialogToDelete(id: number, type: "tiersitter" | "tierbesitzer"): void {
    this.selectedInseratId = id;
    this.selectedInseratType = type;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "400px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteAd();
        console.log("Inserat gelöscht", result);
      }
    });
  }
  // Funktion um das Inserat zu löschen wenn der Benutzer dies bestätigt
  deleteAd(): void {
    // Ersetzen Sie 'id' durch die tatsächliche ID des Inserats, das gelöscht werden soll
    const id = this.selectedInseratId;
    const endpoint =
      this.selectedInseratType === "tiersitter"
        ? `http://localhost:1337/api/inserat-ich-bin-tiersitters/${id}`
        : `http://localhost:1337/api/inserat-ich-bin-tierbesitzers/${id}`;

    this.http.delete(endpoint).subscribe(
      () => {
        console.log("Inserat gelöscht");
        location.reload();
      },
      (error) => {
        console.error("Fehler beim Löschen des Inserats", error);
      }
    );
  }
  // Dialog das den Benutzer fragt, ob er das Profil wirklich löschen möchte
  dialogToDeleteProfile(): void {
    const dialogRef = this.dialog.open(DialogDeleteProfile, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProfile();
        console.log("Inserat gelöscht", result);
      }
    });
  }
  // Funktion um das Profil zu löschen
  deleteProfile(): void {
    const profileId = localStorage.getItem("id");
    this.http
      .delete(`http://localhost:1337/api/users/${profileId}`)
      .subscribe(() => {
        console.log("Profil gelöscht");
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        // Show snackbar message
        this.snackBar
          .open("Konto wurde erfolgreich gelöscht", "OK", {
            duration: 5000,
            verticalPosition: "top",
            horizontalPosition: "center",
          })
          .afterDismissed()
          .toPromise()
          .then(() => {
            this.router.navigate(["/"]).then(() => {
              window.location.reload();
            });
          })
          .catch((error) => {
            console.error("Fehler beim Löschen des Profils", error);
          });
      });
  }

  // Damit wird das Profilfoto aktualisiert bzw. überprüft, ob es ein gültiges Format hat
  onFileSelected(event: Event): void {
    console.log("onFileSelected wurde aufgerufen");
    const file = (event.target as HTMLInputElement).files?.item(0);
    if (file) {
      const fileType = file.type;
      console.log("Ausgewählte Datei:", file);
      console.log("Dateityp:", fileType);
      // Alle von Strapi unterstützten Bildformate
      const validImageTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/tiff",
        "image/x-icon",
        "image/vnd.djvu",
        "jpeg",
        "jpg",
        "png",
        "gif",
        "svg",
        "tiff",
        "x-icon",
        "vnd.djvu",
      ];

      if (validImageTypes.includes(fileType)) {
        this.profilfoto = file;
        console.log("Profilfoto gesetzt:", this.profilfoto);
      } else {
        console.log("Ungültiger Dateityp");
        this.snackBar.open(
          "Ungültiges Dateiformat. Erlaubte Formate sind: JPEG, JPG, PNG, GIF, SVG, TIFF, ICO oder DVU",
          "OK",
          {
            duration: 5000,
            verticalPosition: "top",
            horizontalPosition: "center",
          }
        );
      }
    } else {
      console.log("Keine Datei ausgewählt");
    }
  }

  //Initialisiert die EditProfilkomponente und ruft die API auf, um die Benutzerdaten abzurufen und anzuzeigen
  ngOnInit(): void {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    this.http
      .get("http://localhost:1337/api/users/me?populate[0]=profilfoto", {
        headers,
      })
      .subscribe({
        next: (response: any) => {
          this.user = response;
          this.userForm.patchValue(this.user);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    // Ruft die API auf, um alle Inserate des Benutzers abzurufen
    // Zuerst werden die Inserate als Tiersitter abgerufen
    this.http
      .get(
        "http://localhost:1337/api/users/me?populate[0]=inserat_ich_bin_tiersitters",
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }),
        }
      )
      .subscribe({
        next: (response: any) => {
          if (response.inserat_ich_bin_tiersitters) {
            const inseratTierSitterIds =
              response.inserat_ich_bin_tiersitters.map(
                (inserat: any) => inserat.id
              );

            // Erstellung eines Array von Observables um alle Inserate zu erhalten
            const inseratTiersitterObservables = inseratTierSitterIds.map(
              (id: number) =>
                this.serviceTiersitterInserateService.getTiersitterInserateById(
                  id
                )
            );

            // Führe alle Observables parallel aus und warte auf alle Antworten
            forkJoin<TiersitterInserateDaten[]>(
              inseratTiersitterObservables
            ).subscribe((inserate) => {
              this.inserateTierSitter = inserate;
              console.log(
                "Vorhandene Tiersitters Inserate des Benutzers:",
                inserate
              );
              // Jetzt können die erhaltenen Inserate anzeigen
            });
          }
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    // Dann werden die Inserate als Tierbesitzer abgerufen
    this.http
      .get(
        "http://localhost:1337/api/users/me?populate[0]=inserat_ich_bin_tierbesitzers",
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }),
        }
      )
      .subscribe({
        next: (response: any) => {
          if (response.inserat_ich_bin_tierbesitzers) {
            const inseratTierbesitzerIds =
              response.inserat_ich_bin_tierbesitzers.map(
                (inserat: any) => inserat.id
              );

            // Erstellung eines Array von Observables um alle Inserate zu erhalten
            const inseratTierbesitzerObservables = inseratTierbesitzerIds.map(
              (id: number) =>
                this.ServiceTiersitterInserateAuftraegeService.getTierSitterInseratAuftraegeById(
                  id
                )
            );

            // Führe alle Observables parallel aus und warte auf alle Antworten
            forkJoin<TierSitterInseratAuftraegeDaten[]>(
              inseratTierbesitzerObservables
            ).subscribe((inserate) => {
              this.inserateTierbesitzer = inserate;
              console.log(
                "Vorhandene Tierbesitzer Inserate des Benutzers:",
                inserate
              );
              // Jetzt können die erhaltenen Inserate anzeigen
            });
          }
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

  // Funktion um die Benutzerdaten zu aktualisieren
  updateUser(): void {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const url = `http://localhost:1337/api/users/${this.user.id}`;
    const profilfotoFormData = new FormData();

    // Es sollen nur die Werte gesendet werden, die auch wirklich geändert wurden
    const formData: FormData = new FormData();
    for (const controlName in this.userForm.controls) {
      const control = this.userForm.controls[controlName];
      if (control.dirty) {
        formData.append(controlName, control.value);
      }
    }
    // JWT token und user ID aus dem Local Storage holen
    const jwtToken = localStorage.getItem("token");
    const userId = localStorage.getItem("id");

    // Senden der aktualisierten Benutzerdaten an die API mit PUT Request
    this.http.put(url, formData, { headers }).subscribe({
      next: (response: any) => {
        console.log("User updated successfully", response);
        this.user = response;
        // Weiterleitung zur Landing Page
        this.router.navigate(["/"]);
        // Anzeige der Snackbar-Meldung
        this.snackBar.open(
          "Dein Profil wurde erfolgreich aktualisiert",
          "Schliessen",
          {
            duration: 3000,
            verticalPosition: "top",
            horizontalPosition: "center",
          }
        );
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    // Füge das hochgeladene Bild hinzu, falls vorhanden
    if (this.profilfoto) {
      profilfotoFormData.append("files", this.profilfoto);
      profilfotoFormData.append("ref", "plugin::users-permissions.user"); // the name of your content type
      profilfotoFormData.append("refId", userId ?? ""); // the id of the entry
      profilfotoFormData.append("field", "profilfoto"); // the name of your field
    }
    // Senden des neuen Profilfotos an die API mit POST Request
    if (this.profilfoto) {
      this.http
        .post("http://localhost:1337/api/upload", profilfotoFormData, {
          headers: new HttpHeaders({
            Authorization: `Bearer ${jwtToken}`,
          }),
        })
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
