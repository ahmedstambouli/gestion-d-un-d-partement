import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-update-etud',
  templateUrl: './update-etud.component.html',
  styleUrls: ['./update-etud.component.css']
})
export class UpdateEtudComponent implements OnInit{
  registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute , private dataService: DataService
    ) { }
  id:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id
    });
    console.log()
    this.getEtudiantById(this.id)
    this.registerForm = this.formBuilder.group({
      id:this.id,
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.required ],
      cin: ['', Validators.required],
      adresse: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      absece: ['',Validators.required],
      niveau: ['',Validators.required],


    });
  }
  Etudiant:any
  getEtudiantById(id:any)
  {
id=this.id;
    this.dataService.getEtudiantById(id).subscribe({
      next:(data:any) =>{
         console.log(data)
         this.Etudiant=data
         },
         error:(err:any)=>{
          console.log(err)
          }
    });


  }
  updateEtudiant() {
  
      const formData = this.registerForm.value;
      console.log(formData)
      this.dataService.updateEtudiant(this.id, formData).subscribe((response) => {
        // Gérez la réponse du serveur, par exemple, affichez un message de réussite ou redirigez l'utilisateur.
        console.log('Étudiant mis à jour avec succès.');
      });
    

  }
  

}
