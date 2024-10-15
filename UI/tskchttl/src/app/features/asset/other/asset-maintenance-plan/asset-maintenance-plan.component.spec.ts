import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMaintenancePlanComponent } from './asset-maintenance-plan.component';

describe('AssetMaintenancePlanComponent', () => {
  let component: AssetMaintenancePlanComponent;
  let fixture: ComponentFixture<AssetMaintenancePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetMaintenancePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetMaintenancePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
