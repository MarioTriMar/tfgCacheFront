import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompanyOrdersComponent } from './my-company-orders.component';

describe('MyCompanyOrdersComponent', () => {
  let component: MyCompanyOrdersComponent;
  let fixture: ComponentFixture<MyCompanyOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCompanyOrdersComponent]
    });
    fixture = TestBed.createComponent(MyCompanyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
