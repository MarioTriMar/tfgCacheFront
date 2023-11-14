import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  private baseURL="http://localhost:8080/companies/"
  constructor(private httpClient:HttpClient) { }

  getAllCompanies(){
    return this.httpClient.get<Company[]>(this.baseURL+"getCompanies")
  }
  getCompanyProducts(id : string){
    return this.httpClient.get<Product[]>(this.baseURL+"getCompanyProducts/"+id)
  }

  getCompanyById(id:string){
    return this.httpClient.get<Company>(this.baseURL+"getCompanyById/"+id)
  }

  changeState(id:string){
    return this.httpClient.put(this.baseURL+"changeState/"+id,null)
  }

  updateCompany(company:Company){
    return this.httpClient.put(this.baseURL+"updateCompany", company)
  }
}
