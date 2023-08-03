import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDropdownComponent } from './insert-dropdown.component';

describe('InsertDropdownComponent', () => {
  let component: InsertDropdownComponent;
  let fixture: ComponentFixture<InsertDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertDropdownComponent]
    });
    fixture = TestBed.createComponent(InsertDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
