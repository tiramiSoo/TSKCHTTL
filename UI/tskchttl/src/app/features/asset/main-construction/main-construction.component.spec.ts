import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConstructionComponent } from './main-construction.component';

describe('MainConstructionComponent', () => {
  let component: MainConstructionComponent;
  let fixture: ComponentFixture<MainConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainConstructionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
