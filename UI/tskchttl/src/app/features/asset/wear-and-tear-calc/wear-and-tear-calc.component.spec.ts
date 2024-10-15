import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearAndTearCalcComponent } from './wear-and-tear-calc.component';

describe('WearAndTearCalcComponent', () => {
  let component: WearAndTearCalcComponent;
  let fixture: ComponentFixture<WearAndTearCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WearAndTearCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WearAndTearCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
