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

  addEnseingnats(body:any){
    return this.httpenseingnat.post(this.URL+"addEnseignant",body)
  }

  deleteEnseingnat(id:any)
  {
    return this.httpenseingnat.delete(this.URL+"deleteEnseignant/"+id);
  }

  updateEnseingnat(id:any,body:any)
  {
    return this.httpenseingnat.put(this.URL+"updateEnseignant/"+id,body)
  }
}
