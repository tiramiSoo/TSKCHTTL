import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAssetInformationComponent } from './change-asset-information.component';

describe('ChangeAssetInformationComponent', () => {
  let component: ChangeAssetInformationComponent;
  let fixture: ComponentFixture<ChangeAssetInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeAssetInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeAssetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
