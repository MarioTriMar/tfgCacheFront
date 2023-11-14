import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  
  private baseURL="http://localhost:8080/orders/"
  constructor(private httpClient:HttpClient) { }

  getAllOrders(){
    return this.httpClient.get<Order[]>(this.baseURL+"getOrders")
  }
  saveOrder(order:any){
    return this.httpClient.post(this.baseURL+"saveOrder",order)
  }

  getCustomerOrders(customerId:string){
    return this.httpClient.get<Order[]>(this.baseURL+"getOrdersOfCustomer/"+customerId)
  }

  totalMoney(customerId: string) {
    return this.httpClient.get<Number>(this.baseURL+"totalMoney/"+customerId)
  }

  getCompanyOrders(companyId:string){
    return this.httpClient.get<Order[]>(this.baseURL+"getOrdersOfCompany/"+companyId)
  }
}
