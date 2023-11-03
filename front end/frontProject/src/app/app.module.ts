import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuleEnseingnatModule } from './Enseingnat/module-enseingnat.module';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantComponent } from './etudiant/EtudiantComponent';
import { DataService } from './data.service';
import { UpdateEtudComponent } from './etudiant/update-etud/update-etud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[

  {path:"",component:AcceuilComponent},
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'update-etud/:id', component: UpdateEtudComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    EtudiantComponent,
    UpdateEtudComponent

  ],
  imports: [
    BrowserModule,
    ModuleEnseingnatModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule




  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
