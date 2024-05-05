import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TierSitterInserateComponent } from './tier-sitter-inserate/tier-sitter-inserate.component';
import { TierSitterInserateAuftraegeComponent } from './tier-sitter-inserate-auftraege/tier-sitter-inserate-auftraege.component';
import { TierSitterInseratDetailsComponent } from './tier-sitter-inserat-details/tier-sitter-inserat-details.component';
import { TierSitterInseratAuftraegeDetailsComponent } from './tier-sitter-inserat-auftraege-details/tier-sitter-inserat-auftraege-details.component';
import { LoginComponent } from './login/login.component';
import { NachrichtenchatComponent } from './nachrichtenchat/nachrichtenchat.component';
import { InserierenComponent } from './inserieren/inserieren.component';
import { RegistrierenComponent } from './registrieren/registrieren.component';
const routeConfig: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    title: 'Two4Four',
  },
  {
    path: 'inserieren',
    component: InserierenComponent,
    title: 'Inserieren',
  },
  {
    path: 'nachrichtenchat',
    component: NachrichtenchatComponent,
    title: 'Nachrichtenchat',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'registrieren',
    component: RegistrierenComponent,
    title: 'Registrieren',
  },
  {
    path: 'Tiersitter-Inserate',
    component: TierSitterInserateComponent,
    title: 'Tiersitter Inserate',
  },
  {
    path: 'tiersitter-Inserat-details/:id', // :id is a route parameter
    component: TierSitterInseratDetailsComponent,
    title: 'Tiersitter Inserat Details',
  },

  {
    path: 'Tiersitter-Inserate-Aufträge',
    component: TierSitterInserateAuftraegeComponent,
    title: 'Tiersitter Inserate Aufträge',
  },

  {
    path: 'Tiersitter-Inserat-Aufträge-details/:id', // :id is a route parameter
    component: TierSitterInseratAuftraegeDetailsComponent,
    title: 'Tiersitter Inserat Aufträge Details',
  },
];

export default routeConfig;
