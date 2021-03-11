import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiveTechnologiesComponent } from './selective-technologies.component';

describe('SelectiveTechnologiesComponent', () => {
  let component: SelectiveTechnologiesComponent;
  let fixture: ComponentFixture<SelectiveTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectiveTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectiveTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
