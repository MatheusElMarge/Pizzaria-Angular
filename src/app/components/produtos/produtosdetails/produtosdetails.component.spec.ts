import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosdetailsComponent } from './produtosdetails.component';

describe('ProdutosdetailsComponent', () => {
  let component: ProdutosdetailsComponent;
  let fixture: ComponentFixture<ProdutosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosdetailsComponent]
    });
    fixture = TestBed.createComponent(ProdutosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
