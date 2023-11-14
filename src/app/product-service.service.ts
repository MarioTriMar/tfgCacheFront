import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseURL="http://localhost:8080/products/"
  constructor(private httpClient:HttpClient) { }

  changeStock(productId:string, companyId:string){
    return this.httpClient.put(this.baseURL+"changeStock/"+productId+"/"+companyId,null)
  }

  saveProduct(info:any){
    return this.httpClient.post(this.baseURL+"saveProduct",info)
  }
 
  getProductById(id:string){
    return this.httpClient.get<Product>(this.baseURL+"getProductById/"+id)
  }

  updateProduct(producto:Product){
    let info={
      "id":producto.id,
      "name":producto.name,
      "details":producto.details,
      "price":producto.price,
      "stock":producto.stock,
      "company":producto.company.id
    }
    return this.httpClient.put(this.baseURL+"updateProduct", info)
  }
}
