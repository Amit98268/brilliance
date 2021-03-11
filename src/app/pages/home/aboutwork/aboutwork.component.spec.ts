import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutworkComponent } from './aboutwork.component';

describe('AboutworkComponent', () => {
  let component: AboutworkComponent;
  let fixture: ComponentFixture<AboutworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
