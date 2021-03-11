import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperOnDemandsComponent } from './developer-on-demands.component';

describe('DeveloperOnDemandsComponent', () => {
  let component: DeveloperOnDemandsComponent;
  let fixture: ComponentFixture<DeveloperOnDemandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperOnDemandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperOnDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
