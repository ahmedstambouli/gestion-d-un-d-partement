import { Component, OnInit   } from '@angular/core';
import { ServiceEnseingnatService } from '../Service/service-enseingnat.service';
import { Enseingnat } from '../Enseingnat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-enseignant',
  templateUrl: './admin-enseignant.component.html',
  styleUrls: ['./admin-enseignant.component.css']
})
export class AdminEnseignantComponent implements OnInit {

  enseingnate:Enseingnat=new Enseingnat()
  enseingnat:any
  id:any
  localstoreg:any
  idlocal:any
  enid:any
  registerForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,private serviceensignat:ServiceEnseingnatService,private location: Location){}

  ngOnInit() {
    this.serviceensignat.getEnseingnats().subscribe({
      next:(data) =>{
        this.enseingnat=data
        //console.log('Donnees enregistrées : ', this.enseingnat);


        },
        error: (erreur)=>{
          console.log('Erreur lors de la récupération des données !',erreur);
          }

    });


    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required ],
      cin: ['', Validators.required],
      adresse: ['',Validators.required],
      phonenumber: ['',Validators.required],
      matiere: ['',Validators.required],
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
    this.reloadPage()

  }

  reloadPage() {
    this.location.go(this.location.path()); // Navigates to the current URL
  }


  addenseingnat(){


    this.enseingnate.nom=this.registerForm.value.nom
    this.enseingnate.prenom=this.registerForm.value.prenom
    this.enseingnate.email=this.registerForm.value.email
    this.enseingnate.cin=this.registerForm.value.cin
    this.enseingnate.phoneNumber=this.registerForm.value.phonenumber
    this.enseingnate.matiere=this.registerForm.value.matiere
    this.enseingnate.adresse=this.registerForm.value.adresse
    console.log(this.enseingnate)
    this.serviceensignat.addEnseingnats(this.enseingnate).subscribe({
      next:(data)=> {
        alert("Added Successfully")
        location.reload();
        },
        error:(err)=>{
          console.log(err);
          }

    })
    }


}
