import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-company-products',
  templateUrl: './company-products.component.html',
  styleUrls: ['./company-products.component.css']
})
export class CompanyProductsComponent implements OnInit {
  products: Product[];
  productsOrder:Product[] = [];
  productsName:string[]=[];
  items=false;
  total=0;
  companyName=localStorage.getItem("companyName")!
  constructor(private companyService: CompanyServiceService, private router:Router, private orderService:OrderServiceService){}

  ngOnInit(): void {
    this.companyService.getCompanyProducts(localStorage.getItem("companyId")!).subscribe(data=>{
      this.products=data;
    },error=>{
      console.log(error)
    });
  }
  aniadirPedido(product:Product){
    console.log(product)
    this.productsOrder.push(product);
    this.total+=product.price
    this.items=true
  }
  quitar(i:number, price:number){
    this.productsOrder.splice(i,1);
    this.total-=price
    if(!this.productsOrder.length){
      this.items=false
    }
  }

  realizarPedido(){
    let productsId=[]
    for(let i=0;i<this.productsOrder.length;i++){
      productsId.push(this.productsOrder[i].id)
    }
    console.log(productsId)
    
    let order={
      "companyId":localStorage.getItem("companyId")!,
      "customerId":localStorage.getItem("customerId")!,
      "products":productsId
    }
    this.orderService.saveOrder(order).subscribe(data=>{
      console.log(data);
    })
    
  }
}
