import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  producto:Product = new Product();
  
  tipo=localStorage.getItem("productOperation")

  constructor(private productService:ProductServiceService){}

  ngOnInit(): void {
    if(this.tipo=="update"){
      this.cargarProduct(localStorage.getItem("productId")!)
    }
  }
  guardarProducto(){
    if(this.producto.name==null || this.producto.details==null || this.producto.price==null){
      alert("Faltan valores")
    }else{
      let info={
        "name":this.producto.name,
        "details":this.producto.details,
        "companyId":localStorage.getItem("companyId"),
        "price":this.producto.price
      }
      this.productService.saveProduct(info).subscribe(data=>{
        alert("Creado")
      },error=>{
        console.log(error)
      })
    }
   
  }
  cargarProduct(productId:string){
    this.productService.getProductById(productId).subscribe(data=>{
      this.producto=data
    },error=>{
      console.log(error)
    })
  }

  updateProduct(){
    this.productService.updateProduct(this.producto).subscribe(data=>{
      alert("Actualizado")
    },error=>{
      console.log(error)
    })
  }
}
