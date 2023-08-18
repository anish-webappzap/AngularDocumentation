import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjectGitComponent } from './upload-project-git.component';

describe('UploadProjectGitComponent', () => {
  let component: UploadProjectGitComponent;
  let fixture: ComponentFixture<UploadProjectGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadProjectGitComponent]
    });
    fixture = TestBed.createComponent(UploadProjectGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
