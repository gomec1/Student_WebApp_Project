import { Component } from "@angular/core";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
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
