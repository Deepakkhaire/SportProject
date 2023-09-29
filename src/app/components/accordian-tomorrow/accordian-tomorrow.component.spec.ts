import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianTomorrowComponent } from './accordian-tomorrow.component';

describe('AccordianTomorrowComponent', () => {
  let component: AccordianTomorrowComponent;
  let fixture: ComponentFixture<AccordianTomorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianTomorrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
