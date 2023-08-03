import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatingRoutesProgramaticallyComponent } from './navigating-routes-programatically.component';

describe('NavigatingRoutesProgramaticallyComponent', () => {
  let component: NavigatingRoutesProgramaticallyComponent;
  let fixture: ComponentFixture<NavigatingRoutesProgramaticallyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatingRoutesProgramaticallyComponent]
    });
    fixture = TestBed.createComponent(NavigatingRoutesProgramaticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
