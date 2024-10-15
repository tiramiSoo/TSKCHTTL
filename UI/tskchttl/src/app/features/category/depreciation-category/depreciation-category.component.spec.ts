import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciationCategoryComponent } from './depreciation-category.component';

describe('DepreciationCategoryComponent', () => {
  let component: DepreciationCategoryComponent;
  let fixture: ComponentFixture<DepreciationCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepreciationCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepreciationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
