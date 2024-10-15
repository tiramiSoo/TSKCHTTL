import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetHandlingComponent } from './asset-handling.component';

describe('AssetHandlingComponent', () => {
  let component: AssetHandlingComponent;
  let fixture: ComponentFixture<AssetHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
