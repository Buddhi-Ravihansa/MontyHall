import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationFormComponent } from './components/simulation-form/simulation-form.component';
import { SimulationResultsComponent } from './components/simulation-results/simulation-results.component';


const routes: Routes = [
  { path: '', redirectTo: '/simulation-form', pathMatch: 'full' },
  { path: 'simulation-form', component: SimulationFormComponent },
  { path: 'simulation-results', component: SimulationResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

