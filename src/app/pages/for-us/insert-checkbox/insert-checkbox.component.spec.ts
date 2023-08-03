import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCheckboxComponent } from './insert-checkbox.component';

describe('InsertCheckboxComponent', () => {
  let component: InsertCheckboxComponent;
  let fixture: ComponentFixture<InsertCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertCheckboxComponent]
    });
    fixture = TestBed.createComponent(InsertCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
