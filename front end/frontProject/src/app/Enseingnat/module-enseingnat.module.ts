import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEnseingnatComponent } from './home-enseingnat/home-enseingnat.component';
import { ProfilEnseingnatComponent } from './profil-enseingnat/profil-enseingnat.component';
import { NavbarEnseingnatComponent } from './navbar-enseingnat/navbar-enseingnat.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminEnseignantComponent } from './admin-enseignant/admin-enseignant.component';
import { BrowserModule } from '@angular/platform-browser';







const routes:Routes=[
  {path:'admin' ,component:AdminEnseignantComponent},
  {path:'home', component:HomeEnseingnatComponent , children:[
    {path:'profilenseingnat',component:ProfilEnseingnatComponent}

  ]},


]
@NgModule({
  declarations: [
    HomeEnseingnatComponent,
    ProfilEnseingnatComponent,
    NavbarEnseingnatComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)


  ]
})
export class ModuleEnseingnatModule { }