import { Component } from "@angular/core";

@Component({
  selector: "app-feedback",
  standalone: true,
  imports: [],
  template: `
    <section class="hintergrundunten">
      <p class="inProgress">In progress</p>
      <Img class="bild" src="/assets/Group.png" alt="Icon Mensch am malen" />
    </section>
  `,
  styleUrl: "./feedback.component.css",
})
export class FeedbackComponent {}
