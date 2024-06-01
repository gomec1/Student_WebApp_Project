import { Component } from "@angular/core";

@Component({
  selector: "app-ich-bin-tierbesitzer-inserieren",
  standalone: true,
  imports: [],
  template: `
    <section class="hintergrundunten">
      <div>
        <h1 id="maintitle">Inserieren - Ich suche einen Tiersitter</h1>
      </div>
      <div>
        <form class="form-container">
          <table>
            <tr class="spalten_inserieren">
              <td>
                <label for="titel" class="form_label"
                  >Titel (Ich suche...)</label
                >
              </td>
              <td>
                <input class="form_input" name="titel" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="verfuegbarkeit" class="form_label">Tierart</label>
              </td>
              <td>
                <input class="form_input" name="verfuegbarkeit" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="Lohnkosten" class="form_label">Tierrasse</label>
              </td>
              <td>
                <input class="form_input" name="Lohnkosten" type="text" />
              </td>
            </tr>
            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Alter (optional)</label
                >
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Zeitdauer von - bis
                </label>
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Beschreibung wichtiger Infos
                </label>
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <label for="persoenlicheBeschreibung" class="form_label"
                  >Totalbetrag CHF</label
                >
              </td>
              <td>
                <input
                  class="form_input"
                  name="persoenlicheBeschreibung"
                  type="text"
                />
              </td>
            </tr>

            <tr class="spalten_inserieren">
              <td>
                <button id="insert_bild">Bild einfügen</button>
              </td>
              <td></td>
            </tr>
          </table>

          <input id="button_submit" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  `,
  styleUrl: "./ich-bin-tierbesitzer-inserieren.component.css",
})
export class IchBinTierbesitzerInserierenComponent {}
