import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router, private app:AppComponent){}
  ngOnInit(): void {
    this.app.enable=false
  }
  login(){
    localStorage.setItem("tipo","customer")
    localStorage.setItem("customerName", "Mario")
    localStorage.setItem("customerId","6dffca5b-4856-4f22-aafe-94aecf7f1b39")
    this.app.enable=true
    this.router.navigate(["/allCompanies"])
  }
  loginCompany(){
    localStorage.setItem("tipo", "company")
    localStorage.setItem("companyName", "Mercadona")
    localStorage.setItem("companyId","5f5b217b-94b5-49e7-b2fc-018d18f2b483")
    this.app.enable=true
    this.router.navigate(["/myCompanyProducts"])
  }

}
