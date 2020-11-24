import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid3Component } from './covid3.component';

describe('Covid3Component', () => {
  let component: Covid3Component;
  let fixture: ComponentFixture<Covid3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
