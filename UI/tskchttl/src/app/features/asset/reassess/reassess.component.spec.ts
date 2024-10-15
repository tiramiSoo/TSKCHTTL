import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassessComponent } from './reassess.component';

describe('ReassessComponent', () => {
  let component: ReassessComponent;
  let fixture: ComponentFixture<ReassessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReassessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReassessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
