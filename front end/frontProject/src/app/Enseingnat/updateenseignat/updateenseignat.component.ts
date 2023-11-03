import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEnseingnatService } from '../Service/service-enseingnat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Enseingnat } from '../Enseingnat';

@Component({
  selector: 'app-updateenseignat',
  templateUrl: './updateenseignat.component.html',
  styleUrls: ['./updateenseignat.component.css']
})
export class UpdateenseignatComponent implements OnInit  {
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private serviceensignat:ServiceEnseingnatService) { }

  id:any
  enseingnate:Enseingnat=new Enseingnat()

  registerForm !: FormGroup;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id
    });
    this.registerForm = this.formBuilder.group({
      id:this.id,
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

  enseingnat:any
  getensignantbyid(id:any)
  {
    id=this.id;
    this.serviceensignat.getEnseingnatbyid(id).subscribe({
      next:(data) =>{
         this.enseingnat=data
         },
         error:(err)=>{
          console.log(err)
          }
    });

  }

  onSubmit(){

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
