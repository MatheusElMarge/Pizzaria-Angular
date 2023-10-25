import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenslistComponent } from './itenslist.component';

describe('ItenslistComponent', () => {
  let component: ItenslistComponent;
  let fixture: ComponentFixture<ItenslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItenslistComponent]
    });
    fixture = TestBed.createComponent(ItenslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
