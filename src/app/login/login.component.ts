import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string
  password: string
  constructor(private router:Router, private app:AppComponent, private loginService:LoginServiceService){}
  ngOnInit(): void {
    this.app.enable=false
  }
  login(){
    this.loginService.getUser(this.email,this.password).subscribe(data=>{
      localStorage.setItem("tipo", data.type)
      this.app.enable=true
      if(data.type=="customer"){
        localStorage.setItem("customerName", data.name)
        localStorage.setItem("customerId", data.id)
        localStorage.setItem("image", data.image)
        this.router.navigate(["/allCompanies"])
      }else{
        localStorage.setItem("companyName", data.name)
        localStorage.setItem("companyId", data.id)
        localStorage.setItem("image", data.image)
        this.router.navigate(["/myCompanyProducts"])
      }
      
      
    })
    
  }
  
  

}
