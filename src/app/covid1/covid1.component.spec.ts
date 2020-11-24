import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid1Component } from './covid1.component';

describe('Covid1Component', () => {
  let component: Covid1Component;
  let fixture: ComponentFixture<Covid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
