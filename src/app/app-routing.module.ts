import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AccordianTodayComponent } from './components/accordian-today/accordian-today.component';

const routes: Routes = [
  { path : '', redirectTo : 'inplay-matches', pathMatch:'full'},
  { path : 'inplay-matches', loadChildren : ()=> import('./components/accordian/accordian.module').then( a => a.AccordianModule)},
  { path : 'today-matches', loadChildren : ()=> import('./components/accordian-today/accordian-today.module').then(at => at.AccodianTodayModule)},
  { path : 'tomorrow-matches', loadChildren : ()=> import('./components/accordian-tomorrow/accordian-tomorrow.module').then(atm => atm.AccodianTomorrowModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
