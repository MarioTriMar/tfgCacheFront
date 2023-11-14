import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllProductsComponent } from './all-products/all-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyProductsComponent } from './company-products/company-products.component';
import { FormsModule } from '@angular/forms';
import { MyCompanyProductsComponent } from './my-company-products/my-company-products.component';
import { MyCompanyOrdersComponent } from './my-company-orders/my-company-orders.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListCompaniesComponent,
    SidebarComponent,
    AllProductsComponent,
    MyOrdersComponent,
    MyProfileComponent,
    HeadNavComponent,
    CompanyProductsComponent,
    MyCompanyProductsComponent,
    MyCompanyOrdersComponent,
    EditCompanyComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
