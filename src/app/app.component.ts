import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontCache';
  enable=false;
  constructor(private router:Router){}
  login(){
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigate(["/login"])
  }
}
