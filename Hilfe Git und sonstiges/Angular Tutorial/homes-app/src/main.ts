import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import routeconfig from "./app/routes";

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeconfig)],
}).catch((err) => console.error(err));
