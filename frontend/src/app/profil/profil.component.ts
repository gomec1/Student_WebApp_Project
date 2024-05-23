import { Component, OnInit } from "@angular/core";
import { CommonModule, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-profil",
  standalone: true,
  imports: [RouterModule, HttpClientModule, NgIf, CommonModule],
  template: `
    <div *ngIf="user">
      <h1>{{ user.username }}</h1>
      <p>{{ user.email }}</p>
    </div>
  `,
  styleUrl: "./profil.component.css",
})
export class ProfilComponent implements OnInit {
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    const headers = { Authorization: "Bearer  + ${token}" };

    this.http.get("http://localhost:1337/api/users/me", { headers }).subscribe({
      next: (response: any) => {
        this.user = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
