import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuoteFromComponent } from './get-quote-from.component';

describe('GetQuoteFromComponent', () => {
  let component: GetQuoteFromComponent;
  let fixture: ComponentFixture<GetQuoteFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQuoteFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuoteFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
