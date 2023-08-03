import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleHookComponent } from './component-lifecycle-hook.component';

describe('ComponentLifecycleHookComponent', () => {
  let component: ComponentLifecycleHookComponent;
  let fixture: ComponentFixture<ComponentLifecycleHookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentLifecycleHookComponent]
    });
    fixture = TestBed.createComponent(ComponentLifecycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
