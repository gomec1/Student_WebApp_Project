import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mittleres-element',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hintergrund">
      <div class="such-container">
        <input type="text" placeholder="Suche..." />
        <button type="button" class="such-button"></button>
      </div>
      <div class="button-container">
        <button type="button" class="buttons-mittleres-element">
          Inserieren
        </button>
        <button type="button" class="buttons-mittleres-element">
          Inserate
        </button>
        <button type="button" class="buttons-mittleres-element">
          Nachrichten
        </button>
        <button type="button" class="buttons-mittleres-element">Login</button>
      </div>
    </div>
  `,
  styleUrl: './mittleres-element.component.css',
})
export class MittleresElementComponent {}
