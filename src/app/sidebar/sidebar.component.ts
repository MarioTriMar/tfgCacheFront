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
  decodedImage(image: string) {
    let decodedString = atob(image);
    let byteCharacters = decodedString.split('').map(char => char.charCodeAt(0));
    let byteArray = new Uint8Array(byteCharacters);
    let blob = new Blob([byteArray], { type: 'image/png' }); // replace with the actual image format
    let url = URL.createObjectURL(blob);
    console.log(url);
    return url

  }
}
