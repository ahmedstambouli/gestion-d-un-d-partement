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
  id:any
  localstoreg:any
  idlocal:any
  enid:any
  constructor(private serviceensignat:ServiceEnseingnatService){}

  ngOnInit() {
    this.serviceensignat.getEnseingnats().subscribe({
      next:(data) =>{
        this.enseingnat=data
        console.log('Donnees enregistrées : ', this.enseingnat);


        },
        error: (erreur)=>{
          console.log('Erreur lors de la récupération des données !',erreur);
          }

    });
}


  idensignant(id:any)
  {
    this.serviceensignat.getEnseingnatbyid(id).subscribe({
      next:(data) =>{

        //console.log(data)
        this.localstoreg=data
        localStorage.setItem('ensignant',JSON.stringify(data));

      },
      error:(err)=>{
        console.log(err)
      }

    })

    this.localstoreg=localStorage.getItem('ensignant');

    this.idlocal=JSON.parse(this.localstoreg)

    this.enid=this.idlocal['id']

    console.log(this.enid)


  }




  onsubmit(id:any)
  {

    this.serviceensignat.deleteEnseingnat(id).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }

    })

  }



  clearLocalStorage() {
    localStorage.clear()

  }
}
