import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderServiceService } from '../order-service.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders:Order[]
  money:Number
  
  constructor(private orderService:OrderServiceService){}

  ngOnInit(): void {
    this.orderService.getCustomerOrders(localStorage.getItem("customerId")!).subscribe(data=>{
      this.orders=(data)
    })
    this.orderService.totalMoney(localStorage.getItem("customerId")!).subscribe(data=>{
      this.money=data
      console.log(this.money)
    })
    
  }

}
