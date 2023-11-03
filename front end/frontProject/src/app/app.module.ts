import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuleEnseingnatModule } from './Enseingnat/module-enseingnat.module';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes:Routes=[

  {path:"",component:AcceuilComponent},
  { path: 'etudiant', component: EtudiantComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    EtudiantComponent

  ],
  imports: [
    BrowserModule,
    ModuleEnseingnatModule,
    RouterModule.forRoot(routes),
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
