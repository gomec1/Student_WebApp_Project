import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-landingpage",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hintergrundunten">
      <div class="elemente-container">
        <button class="suchbox" routerLink="Tiersitter-Inserate">
          <h1 class="überschrift">Tiersitter</h1>
          <img
            class="bild1"
            src="/assets/tier-sitter-suche.png"
            alt="Box Tier Sitter Suche"
          />
        </button>

        <div class="kreismitte">
          <h1 class="überschriftkreis">Was suchst du?</h1>
        </div>

        <button class="suchbox" routerLink="Tiersitter-Inserate-Aufträge">
          <h1 class="überschrift">Tiersitteraufträge</h1>
          <img
            class="bild2"
            src="/assets/hüt-aufträge.png"
            alt="Box Tier Sitter Suche"
          />
        </button>
      </div>
    </section>
  `,
  styleUrl: "./landingpage.component.css",
})
export class LandingpageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
