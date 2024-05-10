import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qa-fenster',
  standalone: true,
  imports: [],
  template: `
    <div class="qafenster">
      <img
        class="schliessknopf"
        src="/assets/icon-schliessen.png"
        alt="Schliessknopf"
        (click)="closeDialog()"
      />
      <h2>Questions & Answer</h2>
      <p>Frage 1: Wie kann ich ein Inserat aufschalten?</p>
      <p>
        Antwort 1: Drücken sie dafür auf "Inserieren" auf der Homepage von
        Two4Four. Anschliessend können sie wählen welche Art Inserat sie
        aufschalten möchten.>
      </p>
    </div>
  `,
  styleUrl: './qa-fenster.component.css',
})
export class QaFensterComponent {
  /* Schliessen des QA Fensters */
  constructor(private dialogRef: MatDialogRef<QaFensterComponent>) {}
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
