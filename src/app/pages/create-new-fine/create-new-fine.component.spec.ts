import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFineComponent } from './create-new-fine.component';

describe('CreateNewFineComponent', () => {
  let component: CreateNewFineComponent;
  let fixture: ComponentFixture<CreateNewFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewFineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
