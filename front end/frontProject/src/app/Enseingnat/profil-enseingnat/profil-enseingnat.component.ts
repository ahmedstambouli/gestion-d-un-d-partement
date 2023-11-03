import { Component, OnInit } from '@angular/core';
import { ServiceEnseingnatService } from '../Service/service-enseingnat.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Enseingnat } from '../Enseingnat';

@Component({
  selector: 'app-profil-enseingnat',
  templateUrl: './profil-enseingnat.component.html',
  styleUrls: ['./profil-enseingnat.component.css']
})

export class ProfilEnseingnatComponent implements OnInit {

  constructor(private serviceensignat:ServiceEnseingnatService,private route: ActivatedRoute,private formBuilder: FormBuilder){}
  id:any
  enseingnat:any
  enseingnate:Enseingnat=new Enseingnat
  registerForm !: FormGroup;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id
    });
    this.serviceensignat.getEnseingnats().subscribe({
      next:(data) =>{
        console.log('Donnees enregistrées : ', data);
        },
        error: (erreur)=>{
          console.log('Erreur lors de la récupération des données !');
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

    this.getensignantbyid(this.id)

  }

  getensignantbyid(id:any)
  {
    id=this.id;
    this.serviceensignat.getEnseingnatbyid(id).subscribe({
      next:(data) =>{
         this.enseingnat=data
         console.log(this.enseingnat)
         },
         error:(err)=>{
          console.log(err)
          }
    });

  }

  updateenseingnat()
    {

      console.log(this.id)
      this.enseingnate.nom=this.registerForm.value.nom
      this.enseingnate.prenom=this.registerForm.value.prenom
      this.enseingnate.email=this.registerForm.value.email
      this.enseingnate.cin=this.registerForm.value.cin
      this.enseingnate.phoneNumber=this.registerForm.value.phonenumber
      this.enseingnate.matiere=this.registerForm.value.matiere
      this.enseingnate.adresse=this.registerForm.value.adresse
      console.log(this.enseingnate)
      this.serviceensignat.updateEnseingnat(this.id,this.enseingnate).subscribe({
        next:(data) =>{
          //console.log(data);
          alert('Modification effectuée avec succés');

          },
          error:(err)=>{
            console.log(err)
            }

      })   }




}
