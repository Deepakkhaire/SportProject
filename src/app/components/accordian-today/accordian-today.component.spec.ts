import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianTodayComponent } from './accordian-today.component';

describe('AccordianTodayComponent', () => {
  let component: AccordianTodayComponent;
  let fixture: ComponentFixture<AccordianTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
