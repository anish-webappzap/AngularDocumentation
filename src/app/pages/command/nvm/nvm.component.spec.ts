import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvmComponent } from './nvm.component';

describe('NvmComponent', () => {
  let component: NvmComponent;
  let fixture: ComponentFixture<NvmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvmComponent]
    });
    fixture = TestBed.createComponent(NvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
