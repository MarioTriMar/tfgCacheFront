import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {
  companies: Company[];
  constructor(private companyService: CompanyServiceService, private router:Router){}

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe(data=>{
      this.companies=data;
    },error=>{
      console.log(error)
    });
  }
  
  products(id:string, companyName:string){
    localStorage.setItem("companyId",id);
    localStorage.setItem("companyName",companyName);
    this.router.navigate(['/companyProducts'])
  }

}
