import { NgModule } from '@angular/core';
import { NavigationStart, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path:'', component: NavComponent },
  {path:'', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
