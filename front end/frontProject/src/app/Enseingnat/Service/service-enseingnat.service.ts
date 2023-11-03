import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceEnseingnatService {

  private URL ="http://localhost:8083/Enseignant/"

  constructor(private httpenseingnat:HttpClient) { }

  getEnseingnats()
  {
    return this.httpenseingnat.get(this.URL+"AllEnseignant");
  }

  getEnseingnatbyid(id:any)
  {
    return this.httpenseingnat.get(this.URL+"byid/"+id);
  }

  deleteEnseingnat(id:any)
  {
    return this.httpenseingnat.delete(this.URL+"deleteEnseignant/"+id);
  }


}
