import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompanyProductsComponent } from './my-company-products.component';

describe('MyCompanyProductsComponent', () => {
  let component: MyCompanyProductsComponent;
  let fixture: ComponentFixture<MyCompanyProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCompanyProductsComponent]
    });
    fixture = TestBed.createComponent(MyCompanyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
