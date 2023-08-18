import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildApkComponent } from './build-apk.component';

describe('BuildApkComponent', () => {
  let component: BuildApkComponent;
  let fixture: ComponentFixture<BuildApkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildApkComponent]
    });
    fixture = TestBed.createComponent(BuildApkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
