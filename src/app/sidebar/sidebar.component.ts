import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  tipo=localStorage.getItem("tipo")!
  customerName=localStorage.getItem("customerName")!
  companyName=localStorage.getItem("companyName")!
  constructor(private router:Router){}
  ngOnInit():void {

  }
  logout(){
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigate(["/login"])
  }
}
