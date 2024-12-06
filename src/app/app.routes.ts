import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddCaseComponent } from './casos/add-case/add-case.component';
import { CaseDetailsComponent } from './casos/case-details/case-details.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { StatsComponent } from './stadistics/stats/stats.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { AuthComponent } from './auth/login/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'casos/nuevo', component: AddCaseComponent },
  { path: 'casos/seguimiento', component: CaseDetailsComponent },
  { path: 'perfil', component: ProfileViewComponent },
  { path: 'estadisticas', component: StatsComponent },
  { path: 'configuracion', component: SettingsComponent },
  {path: '**', component: AuthComponent}
];
