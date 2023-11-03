import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  etudiants: any[] = []; // Adjust the type according to your data structure

  constructor(private dataService: DataService) {}
   Etudiant:any

  ngOnInit(): void {
    this.dataService.getAllEtudiants().subscribe({
      next:(data)=>{
        this.Etudiant=data
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  
}
