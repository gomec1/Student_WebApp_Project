import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hintergrund">
      <div class="elemente-container">
        <div class="suchbox1">
          <img
            class="tiersittersuchebox"
            src="/assets/tier-sitter-suche.png"
            alt="Box Tier Sitter Suche"
          />
        </div>

        <div class="kreismitte"></div>

        <div class="suchbox2"></div>
      </div>
      <!--
        <img
          class="tiersittersuchebox"
          src="/assets/tier-sitter-suche.png"
          alt="Box Tier Sitter Suche"
        />
      </div>
--></section>
  `,
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {}
