import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDevProcedureComponent } from './project-dev-procedure.component';

describe('ProjectDevProcedureComponent', () => {
  let component: ProjectDevProcedureComponent;
  let fixture: ComponentFixture<ProjectDevProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDevProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDevProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
