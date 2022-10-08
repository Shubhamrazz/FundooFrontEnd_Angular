import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLabelComponent } from './get-all-label.component';

describe('GetAllLabelComponent', () => {
  let component: GetAllLabelComponent;
  let fixture: ComponentFixture<GetAllLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
