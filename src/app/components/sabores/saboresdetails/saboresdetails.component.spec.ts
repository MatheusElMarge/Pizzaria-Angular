import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresdetailsComponent } from './saboresdetails.component';

describe('SaboresdetailsComponent', () => {
  let component: SaboresdetailsComponent;
  let fixture: ComponentFixture<SaboresdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboresdetailsComponent]
    });
    fixture = TestBed.createComponent(SaboresdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
