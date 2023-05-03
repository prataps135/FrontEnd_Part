import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayCounterComponent } from './two-way-counter.component';

describe('TwoWayCounterComponent', () => {
  let component: TwoWayCounterComponent;
  let fixture: ComponentFixture<TwoWayCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
