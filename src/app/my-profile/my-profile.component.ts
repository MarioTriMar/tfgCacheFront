import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  customer:Customer
  constructor(private customerService: CustomerServiceService){}

  ngOnInit(): void {
    this.customerService.getCustomerById(localStorage.getItem("customerId")!).subscribe(data=>{
      this.customer=data
    },error=>{
      console.log(error)
    })
  }
  actualizar(){
    this.customerService.updateCustomer(this.customer).subscribe(data=>{
      alert("Actualizado")
    },error=>{
      console.log(error)
    })
  }
  bloquearCuenta(){
    this.customerService.changeState(this.customer.id).subscribe(data=>{
      alert("Bloqueado")
    },error=>{
      console.log(error)
    })
  }
}
