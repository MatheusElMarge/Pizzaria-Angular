import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensdetailsComponent } from './itensdetails.component';

describe('ItensdetailsComponent', () => {
  let component: ItensdetailsComponent;
  let fixture: ComponentFixture<ItensdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensdetailsComponent]
    });
    fixture = TestBed.createComponent(ItensdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
