import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard-daily365',
    component: DashboardComponent
  },
  { path: '', redirectTo: '/dashboard-daily365', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard-daily365', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
