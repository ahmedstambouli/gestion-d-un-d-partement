import { Component, OnInit } from '@angular/core';
import { ServiceEnseingnatService } from '../Service/service-enseingnat.service';

@Component({
  selector: 'app-profil-enseingnat',
  templateUrl: './profil-enseingnat.component.html',
  styleUrls: ['./profil-enseingnat.component.css']
})

export class ProfilEnseingnatComponent implements OnInit {

  constructor(private serviceensignat:ServiceEnseingnatService){}

  ngOnInit() {
    this.serviceensignat.getEnseingnats().subscribe({
      next:(data) =>{
        console.log('Donnees enregistrées : ', data);
        },
        error: (erreur)=>{
          console.log('Erreur lors de la récupération des données !');
          }

    });


  }




}
