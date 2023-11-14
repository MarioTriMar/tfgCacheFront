import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { Order } from '../order';

@Component({
  selector: 'app-my-company-orders',
  templateUrl: './my-company-orders.component.html',
  styleUrls: ['./my-company-orders.component.css']
})
export class MyCompanyOrdersComponent implements OnInit {
  orders:Order[]
  constructor(private orderService:OrderServiceService){}
  ngOnInit(): void {
    this.orderService.getCompanyOrders(localStorage.getItem("companyId")!).subscribe(data=>{
      this.orders=data
    })
  }

}
