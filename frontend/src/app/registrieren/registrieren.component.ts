import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-registrieren",
  standalone: true,
  imports: [RouterModule, NgIf, FormsModule, HttpClientModule],
  templateUrl: "./registrieren.component.html",
  styleUrl: "./registrieren.component.css",
})
export class RegistrierenComponent implements OnInit {
  /* Register function */
  username: string = "";
  vorname: string = "";
  ort: string = "";
  email: string = "";
  password: string = "";
  telefonnummer: string = "";
  rolle: string = "";
  name: string = "";
  strasseNr: string = "";
  postleitzahl: string = "";
  geburtsdatum: string = "";
  profilfoto: File | null = null;
  ausweis: File | null = null;
  backgroundImage: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // Diese Methode wird aufgerufen, wenn der Benutzer ein Profilbild oder ausweis hochlädt
  onFileSelected(event: Event, type: string) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const fileType = file.type;
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg+xml",
        "image/tiff",
        "image/vnd.microsoft.icon",
        "image/vnd.djvu",
        "application/zip",
        "application/pdf",
        "application/json",
      ];

      if (validImageTypes.includes(fileType)) {
        if (type === "profilfoto") {
          this.profilfoto = file;
        } else if (type === "ausweis") {
          this.ausweis = file;
        }
      } else {
        alert("Bitte laden Sie eine Datei im unterstützten Format hoch.");
      }
    }
  }

  // onFileChange(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   if (target.files && target.files.length > 0) {
  //     const file = target.files[0];
  //     this.profilfoto = file;
  //   }
  // }

  onSubmit() {
    debugger;

    const formData = new FormData();
    formData.append("username", this.username);
    formData.append("vorname", this.vorname);
    formData.append("ort", this.ort);
    formData.append("email", this.email);
    formData.append("password", this.password);
    formData.append("telefonnummer", this.telefonnummer);
    formData.append("rolle", this.rolle);
    formData.append("name", this.name);
    formData.append("strasseNr", this.strasseNr);
    formData.append("postleitzahl", this.postleitzahl);
    formData.append("geburtsdatum", this.geburtsdatum);
    if (this.profilfoto) {
      formData.append("file", this.profilfoto, this.profilfoto.name);
    }

    // if (this.ausweis) {
    //   formData.append("files.ausweis", this.ausweis);
    // }

    this.http
      .post("http://localhost:1337/api/auth/local/register", formData)
      .subscribe(
        (response) => {
          console.log(response);
          this.snackBar.open("Registrierung erfolgreich", "OK", {
            duration: 3000,
            verticalPosition: "top",
            horizontalPosition: "center",
          });
          this.router.navigate(["/login"]);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  /* Foto hochladen und wird ersetzt Funktion */
  //   backgroundImage: string = ""; // Declare the 'backgroundImage' property
  //   handleFileInput(event: Event) {
  //     const fileInput = event.target as HTMLInputElement;
  //     if (fileInput.files && fileInput.files.length > 0) {
  //       const file = fileInput.files[0];
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         this.backgroundImage = reader.result as string;
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   }
}
