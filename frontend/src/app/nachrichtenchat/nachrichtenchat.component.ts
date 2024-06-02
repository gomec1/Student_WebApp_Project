import { Component } from "@angular/core";

@Component({
  selector: "app-nachrichtenchat",
  standalone: true,
  imports: [],
  template: `
    <section class="hintergrundunten">
      <p class="inProgress">In progress</p>
      <Img class="bild" src="/assets/Group.png" alt="Icon Mensch am malen" />
    </section>
  `,
  styleUrl: "./nachrichtenchat.component.css",
})
export class NachrichtenchatComponent {}
