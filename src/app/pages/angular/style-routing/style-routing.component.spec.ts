import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleRoutingComponent } from './style-routing.component';

describe('StyleRoutingComponent', () => {
  let component: StyleRoutingComponent;
  let fixture: ComponentFixture<StyleRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleRoutingComponent]
    });
    fixture = TestBed.createComponent(StyleRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
