import { Component, OnInit } from '@angular/core';
import { ServiceEnseingnatService } from '../Service/service-enseingnat.service';
import { Enseingnat } from '../Enseingnat';

@Component({
  selector: 'app-admin-enseignant',
  templateUrl: './admin-enseignant.component.html',
  styleUrls: ['./admin-enseignant.component.css']
})
export class AdminEnseignantComponent implements OnInit {

  //enseingnat!:Enseingnat
  enseingnat:any
  constructor(private serviceensignat:ServiceEnseingnatService){}

  ngOnInit() {
    this.serviceensignat.getEnseingnat().subscribe({
      next:(data) =>{
        this.enseingnat=data
        console.log('Donnees enregistrées : ', this.enseingnat);


        },
        error: (erreur)=>{
          console.log('Erreur lors de la récupération des données !',erreur);
          }

    });


  }
}
