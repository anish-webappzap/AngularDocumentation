import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRadioComponent } from './insert-radio.component';

describe('InsertRadioComponent', () => {
  let component: InsertRadioComponent;
  let fixture: ComponentFixture<InsertRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertRadioComponent]
    });
    fixture = TestBed.createComponent(InsertRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
