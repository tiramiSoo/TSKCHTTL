import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIrrigationSystemComponent } from './list-irrigation-system.component';

describe('ListIrrigationSystemComponent', () => {
  let component: ListIrrigationSystemComponent;
  let fixture: ComponentFixture<ListIrrigationSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListIrrigationSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIrrigationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
