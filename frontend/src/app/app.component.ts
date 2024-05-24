import { Component, OnInit } from "@angular/core";
import { NgIf } from "@angular/common";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { RouterModule, Router } from "@angular/router";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { QaFensterComponent } from "./qa-fenster/qa-fenster.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgIf, LandingpageComponent, RouterModule, FormsModule],

  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "two4four";
  // isLoggedIn = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public authService: AuthService
  ) {}

  logout(): void {
    this.authService.logout();
  }

  //QA Fenster
  dialogRef: MatDialogRef<QaFensterComponent> | null = null;

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = "custom-dialog-container";

    dialogConfig.width = "700px";
    dialogConfig.height = "500px";

    this.dialogRef = this.dialog.open(QaFensterComponent, dialogConfig);
  }
}
