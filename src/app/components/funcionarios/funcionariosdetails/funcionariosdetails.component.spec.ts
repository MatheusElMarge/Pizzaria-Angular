import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosdetailsComponent } from './funcionariosdetails.component';

describe('FuncionariosdetailsComponent', () => {
  let component: FuncionariosdetailsComponent;
  let fixture: ComponentFixture<FuncionariosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosdetailsComponent]
    });
    fixture = TestBed.createComponent(FuncionariosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
