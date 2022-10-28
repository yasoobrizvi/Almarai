import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineTypeComponent } from './fine-type.component';

describe('FineTypeComponent', () => {
  let component: FineTypeComponent;
  let fixture: ComponentFixture<FineTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
