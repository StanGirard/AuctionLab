import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcheteursComponent } from './components/clients/acheteurs/acheteurs.component';
import { VendeursComponent } from './components/clients/vendeurs/vendeurs.component';


const routes: Routes = [
  { path: 'clients/acheteurs', component: AcheteursComponent },
  { path: 'clients/vendeurs', component: VendeursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

