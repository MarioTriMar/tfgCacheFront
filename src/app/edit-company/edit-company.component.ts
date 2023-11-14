import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../company';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit{
  company:Company
  constructor(private companyService:CompanyServiceService){}

  ngOnInit(): void {
    this.companyService.getCompanyById("5f5b217b-94b5-49e7-b2fc-018d18f2b483").subscribe(data=>{
      this.company=data
    },error=>{
      console.log(error)
    })
  }
  desactivar(){
    this.companyService.changeState(this.company.id).subscribe(data=>{
      alert("Estado cambiado")
    },error=>{
      console.log(error)
    })
  }
  actualizar(){
    this.companyService.updateCompany(this.company).subscribe(data=>{
      alert("Actualizada")
    },error=>{
      console.log(error)
    })
  }
}
