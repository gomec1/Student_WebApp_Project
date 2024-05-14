import { Component } from "@angular/core";

@Component({
  selector: "app-ich-bin-tiersitter-inserieren",
  standalone: true,
  imports: [],
  template: `
    <section class="hintergrundunten">
      <h1 class="maintitel">
        Inserieren - Ich bin ein Tiersitter und suche ein Tier zum hüten
      </h1>
      <section class="column1">
        <label for="ichSuche" class="schrift">Titel (Ich suche...)</label>
        <input class="eingabefelder" name="ichSuche" type="text" />
      </section>
      <section class="column2"></section>
      <section class="column3"></section>
    </section>
  `,
  styleUrl: "./ich-bin-tiersitter-inserieren.component.css",
})
export class IchBinTiersitterInserierenComponent {}
