import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpStationComponent } from './pump-station.component';

describe('PumpStationComponent', () => {
  let component: PumpStationComponent;
  let fixture: ComponentFixture<PumpStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PumpStationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
