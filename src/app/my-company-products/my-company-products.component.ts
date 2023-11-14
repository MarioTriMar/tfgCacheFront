import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-company-products',
  templateUrl: './my-company-products.component.html',
  styleUrls: ['./my-company-products.component.css']
})
export class MyCompanyProductsComponent implements OnInit {
  products: Product[];
  constructor(private companyService:CompanyServiceService, private productService:ProductServiceService, private router:Router){}

  ngOnInit(): void {
    this.companyService.getCompanyProducts(localStorage.getItem("companyId")!).subscribe(data=>{
      this.products=data
    })
  }
  cambiarStock(productId:string){
    this.productService.changeStock(productId,localStorage.getItem("companyId")!).subscribe(data=>{
      alert("Stock cambiado")
      this.ngOnInit();
    })
  }
  crearProducto(){
    localStorage.setItem("productOperation", "create")
    this.router.navigate(["/product"])
  }
  actualizarProduct(producto:Product){
    localStorage.setItem("productId", producto.id)
    localStorage.setItem("productOperation", "update")
    this.router.navigate(["/product"])
  }
}
