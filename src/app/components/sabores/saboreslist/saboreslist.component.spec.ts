import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboreslistComponent } from './saboreslist.component';

describe('SaboreslistComponent', () => {
  let component: SaboreslistComponent;
  let fixture: ComponentFixture<SaboreslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboreslistComponent]
    });
    fixture = TestBed.createComponent(SaboreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
