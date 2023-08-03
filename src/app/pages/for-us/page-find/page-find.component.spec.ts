import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFindComponent } from './page-find.component';

describe('PageFindComponent', () => {
  let component: PageFindComponent;
  let fixture: ComponentFixture<PageFindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFindComponent]
    });
    fixture = TestBed.createComponent(PageFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
