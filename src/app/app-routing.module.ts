import { NgModule } from '@angular/core';
import { NavigationStart, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';

const routes: Routes = [
 
  {
    path: '', component: NavComponent,  children: [
      { path: 'home', component: HomeComponent },
      {path:'tecnicos',component: TecnicoListComponent}
    ]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

