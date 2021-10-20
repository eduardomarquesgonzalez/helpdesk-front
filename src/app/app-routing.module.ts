import { NgModule } from '@angular/core';
import { NavigationStart, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
 
  {
    path: '', component: NavComponent,  children: [
      { path: 'home', component: HomeComponent },
    ]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

