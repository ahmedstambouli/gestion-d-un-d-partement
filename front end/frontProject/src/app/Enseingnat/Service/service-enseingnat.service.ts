import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceEnseingnatService {

  constructor(private httpenseingnat:HttpClient) { }

  getEnseingnat()
  {
    return this.httpenseingnat.get("http://localhost:8081/Enseignant/AllEnseignant");
  }
}
