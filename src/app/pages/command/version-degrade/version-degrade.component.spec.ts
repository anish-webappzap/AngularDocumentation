import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionDegradeComponent } from './version-degrade.component';

describe('VersionDegradeComponent', () => {
  let component: VersionDegradeComponent;
  let fixture: ComponentFixture<VersionDegradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersionDegradeComponent]
    });
    fixture = TestBed.createComponent(VersionDegradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
