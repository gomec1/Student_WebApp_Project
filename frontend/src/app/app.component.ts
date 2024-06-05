import { Component, OnInit } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { NgIf } from "@angular/common";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { RouterModule, Router } from "@angular/router";
import { Observable } from "rxjs";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { QaFensterComponent } from "./qa-fenster/qa-fenster.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import {
  HttpHeaders,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { NotificationDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { forkJoin } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NgIf,
    LandingpageComponent,
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgFor,
  ],
  providers: [],

  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  notificationDetails: any[] = [];
  tiersitterFromUserId: number[] = [];
  tiersitterInseratId: number[] = [];
  tierbesitzerFromUserId: number[] = [];
  tierbesitzerInseratId: number[] = [];
  notificationTiersitterIds: number[] = [];
  notificationTierbesitzersIds: number[] = [];
  hasNotifications = false;
  title = "two4four";

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public authService: AuthService,
    public http: HttpClient,
    private route: ActivatedRoute
  ) {}
  // Ruft die Methode logout auf, um den Benutzer abzumelden
  logout(): void {
    this.authService.logout();
  }

  //QA Fenster
  dialogRef: MatDialogRef<QaFensterComponent> | null = null;

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = "custom-dialog-container";

    dialogConfig.width = "700px";
    dialogConfig.height = "500px";

    this.dialogRef = this.dialog.open(QaFensterComponent, dialogConfig);
  }
  // Ruft die Methode getUserAndInseratData auf, um die Daten des Benutzers (Notification: FromUser) und des Inserats (Inserat welches angefragt wurde) zu erhalten
  getUserAndInseratData(
    userId: number,
    inseratId: number,
    type: string
  ): Observable<{ fromUser: any; inserat: any }> {
    const fromUser$ = this.http.get(
      `http://localhost:1337/api/users/${userId}`
    );
    const inserat$ = this.http.get(
      `http://localhost:1337/api/inserat-ich-bin-${type}s/${inseratId}`
    );

    return forkJoin({ fromUser: fromUser$, inserat: inserat$ });
  }

  openNotificationDialog(): void {
    // Leeren Sie zuerst die vorhandenen Benachrichtigungsdetails
    this.notificationDetails = [];

    // Rufen Sie getNotificationDetails für jede Benachrichtigungs-ID auf
    this.notificationTiersitterIds.forEach((id) => {
      this.getNotificationDetails(id, "notifications");
    });
    this.notificationTierbesitzersIds.forEach((id) => {
      this.getNotificationDetails(id, "notification-tierbesitzers");
    });

    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = false;
    dialogConfig.width = "700px";
    dialogConfig.height = "500px";
    dialogConfig.data = this.notificationDetails;

    console.log("Notification details", this.notificationDetails);

    try {
      this.dialog.open(NotificationDialogComponent, dialogConfig);
    } catch (error: any) {
      console.error("Error beim öffnen vom notification dialog", error);
    }
  }
  // Überprüft, ob der Benutzer angemeldet ist und ruft die Methode checkNotifications auf, um die Notifications (Anfragen) zu überprüfen
  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.checkNotifications(
        "http://localhost:1337/api/users/me?populate[0]=notifications",
        this.notificationTiersitterIds,
        "notifications"
      );
      this.checkNotifications(
        "http://localhost:1337/api/users/me?populate[0]=notification_tierbesitzers",
        this.notificationTierbesitzersIds,
        "notification-tierbesitzers"
      );
    } else {
      console.log("User is not logged in");
    }
  }
  // Überprüft, ob Notifications (Anfragen) vorhanden sind
  checkNotifications(url: string, idArray: number[], type: string): void {
    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${jwtToken}`,
      });

      this.http.get(url, { headers }).subscribe(
        (response: any) => {
          console.log("Es hat Notificatons", response);
          if (
            response &&
            (response.notifications?.length > 0 ||
              response.notification_tierbesitzers?.length > 0)
          ) {
            this.hasNotifications = true;

            // Speichern Sie die IDs in den entsprechenden Arrays
            response.notifications?.forEach((notification: any) => {
              idArray.push(notification.id);
              this.getNotificationDetails(notification.id, type);
            });
            response.notification_tierbesitzers?.forEach(
              (notification: any) => {
                idArray.push(notification.id);
                this.getNotificationDetails(notification.id, type);
              }
            );
          }
        },
        (error: any) => {
          console.error("Error when calling the API", error);
        }
      );
    }
  }
  // Holt sich die Details der Anfragen.
  getNotificationDetails(id: number, type: string): void {
    const url = `http://localhost:1337/api/${type}/${id}?populate[0]=fromUser&populate[1]=inserat`;
    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
      const headers = new HttpHeaders({ Authorization: `Bearer ${jwtToken}` });
      this.http.get(url, { headers }).subscribe(
        (response: any) => {
          console.log("Notification details", response);
          this.notificationDetails.push({
            id: id, // Fügen Sie die ID hier hinzu
            type: type,
            fromUser: response.data.attributes.fromUser.data,
            inserat: response.data.attributes.inserat.data,
          });
        },
        (error: any) => {
          if (error.status !== 404) {
            console.error("Error when calling the API", error);
          }
        }
      );
    }
  }
}
