import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChildRoutesComponent } from './nested-child-routes.component';

describe('NestedChildRoutesComponent', () => {
  let component: NestedChildRoutesComponent;
  let fixture: ComponentFixture<NestedChildRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedChildRoutesComponent]
    });
    fixture = TestBed.createComponent(NestedChildRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
