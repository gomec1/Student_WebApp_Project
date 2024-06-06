import { Component, Inject } from "@angular/core";
import { CommonModule, NgFor } from "@angular/common";
import { NotificationItem } from "../notification-item";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
// Diese component wird in der edit-profil verwendet für das PopUp, welches fragt
// ob man das Inserat wirklich löschen möchte
@Component({
  selector: "app-confirm-dialog",
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  providers: [MatDialog],
  template: `
    <h2 mat-dialog-title>Löschen</h2>
    <mat-dialog-content>
      Möchtest du dein Inserat wirklich löschen?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" cdkFocusInitial>
        Nein
      </button>
      <button mat-button [mat-dialog-close]="true">Ja</button>
    </mat-dialog-actions>
  `,
  styleUrl: "./confirm-dialog.component.css",
})
export class ConfirmDialogComponent {
  constructor(public dialog: MatDialog) {}
}

// Dieses Component wird in der edit-profil verwendet für das PopUp, welches fragt
// ob man das Profil löschen möchte (Alles bestehenden Inserate werden auch gelöscht)
@Component({
  selector: "app-dialog-delete-profile",
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  providers: [MatDialog],
  template: `
    <h2 mat-dialog-title>Löschen</h2>
    <mat-dialog-content>
      Möchtest du dein Profil wirklich löschen? Alle vorhandenen Inserate werden
      ebenfalls gelöscht.
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" cdkFocusInitial>
        Nein
      </button>
      <button mat-button [mat-dialog-close]="true">Ja</button>
    </mat-dialog-actions>
  `,
  styleUrls: ["./confirm-dialog.component.css"],
})
export class DialogDeleteProfile {
  constructor(public dialog: MatDialog) {}
}

@Component({
  selector: "app-dialog-before-request",
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  providers: [MatDialog],
  template: `
    <h2 mat-dialog-title>Anfrage</h2>
    <mat-dialog-content>
      Möchtest du wirklich eine Anfrage für dieses Inserat senden? Der Ersteller
      des Inserats wird über deine Anfrage informiert und bekommt deine
      Kontaktdaten. Der Ersteller wird sich dann gegebenfalls bei dir melden.
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" cdkFocusInitial>
        Nein
      </button>
      <button mat-button [mat-dialog-close]="true">Ja!</button>
    </mat-dialog-actions>
  `,
  styleUrls: ["./confirm-dialog.component.css"],
})
export class DialogBeforeRequest {
  constructor(public dialog: MatDialog) {}
}

@Component({
  selector: "app-notification-dialog",
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    HttpClientModule,
    CommonModule,
    NgFor,
  ],
  template: `
    <div class="hintergrund">
      <h1 class="dialog-titel">Diese Anfrage/en hast du bekommen 😍👇🏽💡</h1>
      <div class="dialog-content" *ngFor="let item of data">
        <p>
          Folgender Benutzer:
          <strong>{{ item.fromUser.attributes.vorname }}</strong
          >&nbsp;<strong>{{ item.fromUser.attributes.name }}</strong
          >, Email: <strong>{{ item.fromUser.attributes.email }}</strong
          >, Tel.
          <strong>{{ item.fromUser.attributes.telefonnummer }}</strong> hat eine
          Anfrage für dein Inserat "{{ item.inserat.attributes.titel }}"
          geschickt. Kontaktiere {{ item.fromUser.attributes.vorname }} doch!
        </p>
        <button class="delete-button" (click)="delete(item)">Löschen</button>
      </div>
      <button class="close-button" (click)="close()">Schliessen</button>
    </div>
  `,
  styleUrls: ["./confirm-dialog.component.css"],
})
export class NotificationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NotificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public http: HttpClient
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  delete(item: NotificationItem): void {
    console.log("Deleting notification", item.id);
    console.log("Deleting notification", item.type);
    const url = `http://localhost:1337/api/${item.type}/${item.id}`;
    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${jwtToken}`,
      });

      this.http.delete(url, { headers }).subscribe(
        () => {
          console.log("Notification deleted");
          this.data = this.data.filter(
            (i: NotificationItem) => i.id !== item.id
          );
          window.location.reload();
        },
        (error: any) => {
          console.error("Error when calling the API", error);
        }
      );
    }
  }
}
