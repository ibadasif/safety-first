import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverdiseaseComponent } from './liverdisease.component';

describe('LiverdiseaseComponent', () => {
  let component: LiverdiseaseComponent;
  let fixture: ComponentFixture<LiverdiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiverdiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiverdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
