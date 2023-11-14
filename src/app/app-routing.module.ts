import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CompanyProductsComponent } from './company-products/company-products.component';
import { MyCompanyProductsComponent } from './my-company-products/my-company-products.component';
import { MyCompanyOrdersComponent } from './my-company-orders/my-company-orders.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',redirectTo: '/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'allCompanies',component:ListCompaniesComponent},
  {path:'allProducts',component:AllProductsComponent},
  {path:'myOrders', component:MyOrdersComponent},
  {path:'myProfile',component:MyProfileComponent},
  {path:'companyProducts',component:CompanyProductsComponent},
  {path:'myCompanyProducts', component:MyCompanyProductsComponent},
  {path:'myCompanyOrders', component:MyCompanyOrdersComponent},
  {path:'myCompany',component:EditCompanyComponent},
  {path:'product', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
