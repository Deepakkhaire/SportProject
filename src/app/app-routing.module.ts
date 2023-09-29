import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AccordianComponent } from './components/accordian/accordian.component';
// import { AccordianTodayComponent } from './components/accordian-today/accordian-today.component';

const routes: Routes = [
  // { path : '', redirectTo : 'inplay-matches', pathMatch:'full'},
  // { path : 'inplay-matches', component : AccordianComponent},
  // { path : 'today-matches', component : AccordianTodayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
