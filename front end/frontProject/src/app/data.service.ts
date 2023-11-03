import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  private backendUrl = 'http://localhost:8083/etudiant'; 

  constructor(private http: HttpClient) {}

  getAllEtudiants() {
    return this.http.get(this.backendUrl+"/Etudiant/getAll");
  }
  getEtudiantById(id:any){
    return this.http.get(this.backendUrl+"/"+id)
  }
  updateEtudiant(id: any, data: any) {
    return this.http.put(this.backendUrl+"/ModifyEtudiant/"+id,data)
    
  }
  
  
}
