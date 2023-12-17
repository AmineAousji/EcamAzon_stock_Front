import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParcelComponent } from './new-parcel.component';

describe('NewParcelComponent', () => {
  let component: NewParcelComponent;
  let fixture: ComponentFixture<NewParcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewParcelComponent]
    });
    fixture = TestBed.createComponent(NewParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
