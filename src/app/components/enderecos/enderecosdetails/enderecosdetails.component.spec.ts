import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosdetailsComponent } from './enderecosdetails.component';

describe('EnderecosdetailsComponent', () => {
  let component: EnderecosdetailsComponent;
  let fixture: ComponentFixture<EnderecosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosdetailsComponent]
    });
    fixture = TestBed.createComponent(EnderecosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
