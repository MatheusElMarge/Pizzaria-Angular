import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioslistComponent } from './funcionarioslist.component';

describe('FuncionarioslistComponent', () => {
  let component: FuncionarioslistComponent;
  let fixture: ComponentFixture<FuncionarioslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioslistComponent]
    });
    fixture = TestBed.createComponent(FuncionarioslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
