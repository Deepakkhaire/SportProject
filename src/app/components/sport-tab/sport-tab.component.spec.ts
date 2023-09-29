import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportTabComponent } from './sport-tab.component';

describe('SportTabComponent', () => {
  let component: SportTabComponent;
  let fixture: ComponentFixture<SportTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
