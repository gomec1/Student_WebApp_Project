import { Routes } from "@angular/router";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { TierSitterInserateComponent } from "./tier-sitter-inserate/tier-sitter-inserate.component";
import { TierSitterInserateAuftraegeComponent } from "./tier-sitter-inserate-auftraege/tier-sitter-inserate-auftraege.component";
import { TierSitterInseratDetailsComponent } from "./tier-sitter-inserat-details/tier-sitter-inserat-details.component";
import { TierSitterInseratAuftraegeDetailsComponent } from "./tier-sitter-inserat-auftraege-details/tier-sitter-inserat-auftraege-details.component";
import { LoginComponent } from "./login/login.component";
import { NachrichtenchatComponent } from "./nachrichtenchat/nachrichtenchat.component";
import { InserierenComponent } from "./inserieren-vorseite/inserieren.component";
import { RegistrierenComponent } from "./registrieren/registrieren.component";
import { IchBinTiersitterInserierenComponent } from "./ich-bin-tiersitter-inserieren/ich-bin-tiersitter-inserieren.component";
import { IchBinTierbesitzerInserierenComponent } from "./ich-bin-tierbesitzer-inserieren/ich-bin-tierbesitzer-inserieren.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { EditProfilComponent } from "./edit-profil/edit-profil.component";
import { InseratTierbesitzerBearbeitenComponent } from "./inserat-tierbesitzer-bearbeiten/inserat-tierbesitzer-bearbeiten.component";
import { InseratTiersitterBearbeitenComponent } from "./inserat-tiersitter-bearbeiten/inserat-tiersitter-bearbeiten.component";

const routeConfig: Routes = [
  {
    path: "",
    component: LandingpageComponent,
    title: "Two4Four",
  },
  {
    path: "inserieren-vorseite",
    component: InserierenComponent,
    title: "Inserieren",
  },
  {
    path: "ich-bin-tiersitter-inserieren",
    component: IchBinTiersitterInserierenComponent,
    title: "Ich bin Tiersitter Inserieren",
  },
  {
    path: "ich-bin-tierbesitzer-inserieren",
    component: IchBinTierbesitzerInserierenComponent,
    title: 'Ich bin Tier"besitzer Inserieren',
  },
  {
    path: "feedback",
    component: FeedbackComponent,
    title: "Feedback",
  },
  {
    path: "nachrichtenchat",
    component: NachrichtenchatComponent,
    title: "Nachrichtenchat",
  },

  {
    path: "edit-profil",
    component: EditProfilComponent,
    title: "Profil bearbeiten",
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Login",
  },
  {
    path: "registrieren",
    component: RegistrierenComponent,
    title: "Registrieren",
  },
  {
    path: "Tiersitter-Inserate",
    component: TierSitterInserateComponent,
    title: "Tiersitter Inserate",
  },
  {
    path: "tiersitter-Inserat-details/:id", // :id is a route parameter
    component: TierSitterInseratDetailsComponent,
    title: "Tiersitter Inserat Details",
  },

  {
    path: "Tiersitter-Inserate-Aufträge",
    component: TierSitterInserateAuftraegeComponent,
    title: "Tiersitter Inserate Aufträge",
  },

  {
    path: "Tiersitter-Inserat-Aufträge-details/:id", // :id is a route parameter
    component: TierSitterInseratAuftraegeDetailsComponent,
    title: "Tiersitter Inserat Aufträge Details",
  },

  {
    path: "inserat-tierbesitzer-bearbeiten",
    component: InseratTierbesitzerBearbeitenComponent,
    title: "Inserat Tierbesitzer Bearbeiten",
  },
  {
    path: "inserat-tiersitter-bearbeiten",
    component: InseratTiersitterBearbeitenComponent,
    title: "Inserat Tiersitter Bearbeiten",
  },
];

export default routeConfig;
