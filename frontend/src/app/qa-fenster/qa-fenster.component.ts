import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-qa-fenster",
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
      <p>
        <strong
          >Was passiert, wenn es ein Problem gibt welches hier nicht beschrieben
          wird?</strong
        >
      </p>
      <p>
        Wenn du auf ein Problem stösst, sind wir hier, um zu helfen. Bitte
        kontaktiere uns unter
        <a href="mailto:two4fourbfh@gmail.com">two4fourbfh&#64;gmail.com</a>
        gmail.com, und wir werden uns umgehend um dein Anliegen kümmern.
      </p>
      <p>
        <strong>Momentane bekannte Bugs</strong>
      </p>
      <p>
        Wenn man beim Edit-Profil das Konto löscht und noch Inserate mit diesem
        Benutzer vorhanden sind, wird das Profil gelöscht, aber die Inserate
        bleiben bestehen. Zudem kann man danach keine neuen Inserate erstellen.
      </p>
      <p><strong>Was ist two4four und wie funktioniert es?</strong></p>
      <p>
        two4four ist ein Online-Marktplatz, der Haustierbesitzer mit
        vertrauenswürdigen und zuverlässigen Betreuern verbindet.
        Haustierbesitzer können Betreuer in ihrer Nähe finden, Profile
        durchsehen und die richtige Person auswählen, um sich um ihre Haustiere
        zu kümmern. Betreuer können sich registrieren, ihr Profil erstellen und
        Jobs annehmen, um Haustiere zu betreuen und dabei Geld zu verdienen
      </p>
      <p><strong>Wie registriere ich mich?</strong></p>
      <p>
        Die Registrierung ist einfach! Klicken auf der Startseite auf die
        Schaltfläche "Login" und dann auf "Registrieren. Folgen Sie
        anschliessend den Anweisungen. Du kannst dich als Haustierbesitzer oder
        Tiersitter anmelden, oder beides, falls gewünscht. Alle Felder müssen
        ausgefühlt werden!
      </p>

      <p>
        <strong>
          Warum werden bei der Registrierung so viele Informationen
          benötigt?</strong
        >
      </p>
      <p>
        Um die Sicherheit zu erhöhen, benötigen wir alle persönlichen
        Informationen, einschliesslich eines Ausweisdokuments und eines
        Profilfotos. Jede Registrierung wird von uns manuell überprüft. Da wir
        Menschen miteinander verbinden, ist es uns besonders wichtig, zu wissen,
        mit wem wir es zu tun haben.
      </p>

      <p>
        <strong
          >Wie finde ich einen geeigneten Betreuer für mein Haustier?</strong
        >
      </p>
      <p>
        Gehe auf "Tiersitter" und klicke dich durch. Schau dir die Profile an
        und lese die Persönliche Beschreibung. Auch die Verfügbarkeiten sind
        natürlich wicht, falls dir etwas passt kannst du den Betreuer direkt
        Anfragen.
      </p>
      <p>
        <strong>
          Kann ich auf two4four auch kurzfristige Betreuungen finden?</strong
        >
      </p>
      <p>
        Ja, du kannst auch kurzfristige Betreuungsmöglichkeiten finden. Viele
        unserer Betreuer stehen für spontane Anfragen zur Verfügung. Nutzen Sie
        die Verfügbarkeitsangaben in den Profilen, um Betreuer zu finden, die
        kurzfristig einspringen können.
      </p>

      <p>
        <strong>
          Wie stelle ich sicher, dass mein Haustier in guten Händen ist?</strong
        >
      </p>
      <p>
        Alle Betreuer auf two4four durchlaufen einen gründlichen
        Überprüfungsprozess, bei dem sie ihre ID einsenden müssen, um ihre
        Vertrauenswürdigkeit und Zuverlässigkeit zu gewährleisten. Zudem
        entscheidest du als Haustierbesitzer, wer dein Haustier betreuen darf.
        Wenn dich jemand Anfragt erhölst du die Kontaktdaten und kannst dich mit
        dem Betreuer in Verbindung setzen.
      </p>

      <p><strong> Wie kann ich eine Anfrage einreichen?</strong></p>
      <p>
        Um eine Anfrage einzureichen, kannst du direkt unter dem gewünschten
        Inserat eine Anfrage einreichen. Die Kontaktdaten werden dann dem
        Inserenten übermittelt.
      </p>

      <p><strong> Was kann die Nachrichten Funktion?</strong></p>

      <p>
        Die Funktion "Nachrichten" ist derzeit in Entwicklung und wird in einer
        zukünftigen Version fertiggestellt. Nach der Fertigstellung wird es
        Ihnen ermöglicht, direkt mit anderen Benutzern auf der Plattform zu
        chatten.
      </p>

      <p><strong>Was kann die Feedback Funktion?</strong></p>
      <p>
        Die Funktion "Feedback" ist derzeit in Entwicklung und wird in einer
        zukünftigen Version fertiggestellt. Zukünftig wird es möglich sein
        Feedback zu geben und zu erhalten.
      </p>
      <p><strong> Wie kann ich Inserate löschen oder bearbeiten?</strong></p>
      <p>
        Um Inserate zu löschen oder zu bearbeiten, navigieren Sie bitte zum
        Register "Profil". Dort finden Sie eine Übersicht Ihrer Inserate,
        einschliesslich derer, die Sie als Betreuer oder als Haustierbesitzer
        veröffentlicht haben. Wählen Sie das entsprechende Inserat aus, das Sie
        bearbeiten oder löschen möchten. Auf der Seite des Inserats finden Sie
        Optionen zum Bearbeiten oder Löschen. Folgen Sie einfach den
        Anweisungen, um Ihre gewünschten Änderungen vorzunehmen.
      </p>
      <p><strong> Was kostet die Nutzung?</strong></p>
      <p>
        Die Registrierung auf two4four ist kostenlos. Die Kosten für die
        Betreuung hängen von den jeweiligen Betreuern ab und werden auf deren
        Profilen angezeigt. Einige Betreuer bieten auch Sonderangebote oder
        Rabatte an.
      </p>
      <p><strong> Wie wird die Bezahlung abgewickelt?</strong></p>
      <p>
        Die Bezahlung erfolgt direkt zwischen Haustierbesitzer und Betreuer
        ausserhalb der Plattform. two4four erleichtert nur die Vermittlung und
        übernimmt keine Verantwortung für die Zahlungsabwicklung. Bitte stelle
        sicher, dass Sie die Zahlungsmodalitäten vor Beginn der Betreuung
        klären.
      </p>

      <p><strong> Sind meine Informationen auf two4four sicher?</strong></p>
      <p>
        Ja, wir legen grossen Wert auf die Sicherheit Ihrer Daten. Die Daten von
        two4four werden sicher in der Schweiz gespeichert und verarbeitet. Wir
        geben dein Daten niemals an Dritte weiter.
      </p>
    </div>
  `,
  styleUrl: "./qa-fenster.component.css",
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
