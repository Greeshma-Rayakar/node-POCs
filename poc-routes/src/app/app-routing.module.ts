import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { WeekdayComponent } from './weekday/weekday.component';


const routes: Routes = [
  { path:'', component : TimeComponent},
  { path:'day', component : WeekdayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
