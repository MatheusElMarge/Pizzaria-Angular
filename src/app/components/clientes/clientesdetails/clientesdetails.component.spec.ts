import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesdetailsComponent } from './clientesdetails.component';

describe('ClientesdetailsComponent', () => {
  let component: ClientesdetailsComponent;
  let fixture: ComponentFixture<ClientesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesdetailsComponent]
    });
    fixture = TestBed.createComponent(ClientesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
