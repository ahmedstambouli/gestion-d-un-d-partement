import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEnseingnatService } from '../Service/service-enseingnat.service';

@Component({
  selector: 'app-updateenseignat',
  templateUrl: './updateenseignat.component.html',
  styleUrls: ['./updateenseignat.component.css']
})
export class UpdateenseignatComponent implements OnInit  {
  constructor(private router: Router,private route: ActivatedRoute,private serviceensignat:ServiceEnseingnatService) { }

  id:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });

    console.log()
    this.getensignantbyid(this.id)
  }

  enseingnat:any
  getensignantbyid(id:any)
  {
id=this.id;
    this.serviceensignat.getEnseingnatbyid(id).subscribe({
      next:(data) =>{
         console.log(data)
         this.enseingnat=data
         },
         error:(err)=>{
          console.log(err)
          }
    });

  }

}
