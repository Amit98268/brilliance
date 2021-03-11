import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUpcomingCompleteComponent } from './current-upcoming-complete.component';

describe('CurrentUpcomingCompleteComponent', () => {
  let component: CurrentUpcomingCompleteComponent;
  let fixture: ComponentFixture<CurrentUpcomingCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentUpcomingCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUpcomingCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
