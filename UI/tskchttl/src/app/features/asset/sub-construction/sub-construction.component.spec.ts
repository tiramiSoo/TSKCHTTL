import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubConstructionComponent } from './sub-construction.component';

describe('SubConstructionComponent', () => {
  let component: SubConstructionComponent;
  let fixture: ComponentFixture<SubConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubConstructionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
