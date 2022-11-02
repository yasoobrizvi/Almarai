import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineAssignmentComponent } from './fine-assignment.component';

describe('FineAssignmentComponent', () => {
  let component: FineAssignmentComponent;
  let fixture: ComponentFixture<FineAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
