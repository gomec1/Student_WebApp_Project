import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MittleresElementComponent } from './mittleres-element/mittleres-element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MittleresElementComponent],
  template: `
    <main>
      <header class="hintergrund">
        <img class="qa-zeichen" src="/assets/qa-zeichen.png" alt="QA-Zeichen" />
        <div class="logo-box">
          <img
            class="footprint-human"
            src="/assets/footprint-human.png"
            alt="footprint human"
          />
          <img class="brand-logo" src="/assets/logo.png" alt="logo" />
          <img
            class="footprint-dog"
            src="/assets/footprint-dog.png"
            alt="footprint dog"
          />
        </div>
        <img
          class="profil-zeichen"
          src="/assets/profil-zeichen.png"
          alt="Profil-Zeichen"
        />
      </header>
    </main>
    <section>
      <app-mittleres-element></app-mittleres-element>
    </section>
  `,

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'two4four';
}
