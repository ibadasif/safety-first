import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid2Component } from './covid2.component';

describe('Covid2Component', () => {
  let component: Covid2Component;
  let fixture: ComponentFixture<Covid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
