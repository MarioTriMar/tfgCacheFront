import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private baseURL="http://localhost:8080/customers/"
  constructor(private httpClient:HttpClient) { }

  getCustomerById(id:string){
    return this.httpClient.get<Customer>(this.baseURL+"getCustomerById/"+id)
  }

  updateCustomer(customer:Customer){
    return this.httpClient.put(this.baseURL+"updateCustomer",customer)
  }

  changeState(customerId:string){
    return this.httpClient.put(this.baseURL+"changeState/"+customerId,null)
  }
}
