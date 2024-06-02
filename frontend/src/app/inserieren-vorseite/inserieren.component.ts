import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-inserieren-vorseite",
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hintergrundunten">
      <div class="elemente-container">
        <button class="suchbox" routerLink="/ich-bin-tiersitter-inserieren">
          <h1 class="überschrift1">
            Ich bin ein Tiersitter und suche ein Tier zum hüten
          </h1>
          <img
            class="bild1"
            src="/assets/tier-sitter-suche.png"
            alt="Box Tier Sitter Suche"
          />
        </button>

        <div class="kreismitte">
          <h1 class="überschriftkreis">Was möchtest du inserieren?</h1>
        </div>

        <button class="suchbox" routerLink="/ich-bin-tierbesitzer-inserieren">
          <h1 class="überschrift2">
            Ich bin Tierbesitzer und suche einen Tiersitter
          </h1>
          <img
            class="bild2"
            src="/assets/hüt-aufträge.png"
            alt="Box Tier Sitter Suche"
          />
        </button>
      </div>
    </section>
  `,
  styleUrl: "./inserieren.component.css",
})
export class InserierenComponent {}
