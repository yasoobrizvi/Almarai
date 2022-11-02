import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualFineAssignmentComponent } from './manual-fine-assignment';

describe('ManualFineAssignmentComponent', () => {
  let component: ManualFineAssignmentComponent;
  let fixture: ComponentFixture<ManualFineAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualFineAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualFineAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
