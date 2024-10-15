import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductDepreciationComponent } from './deduct-depreciation.component';

describe('DeductDepreciationComponent', () => {
  let component: DeductDepreciationComponent;
  let fixture: ComponentFixture<DeductDepreciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeductDepreciationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeductDepreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
