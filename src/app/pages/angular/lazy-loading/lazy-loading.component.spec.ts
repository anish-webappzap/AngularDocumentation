import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingComponent } from './lazy-loading.component';

describe('LazyLoadingComponent', () => {
  let component: LazyLoadingComponent;
  let fixture: ComponentFixture<LazyLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadingComponent]
    });
    fixture = TestBed.createComponent(LazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
