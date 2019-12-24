import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './components/clients/clients.component';
import { AcheteursComponent } from './components/clients/acheteurs/acheteurs.component';
import { VendeursComponent } from './components/clients/vendeurs/vendeurs.component';


const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/acheteurs', component: AcheteursComponent },
  { path: 'clients/vendeurs', component: VendeursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

