import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuleEnseingnatModule } from './Enseingnat/module-enseingnat.module';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[

  {path:"",component:AcceuilComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent

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
