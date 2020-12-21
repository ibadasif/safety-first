import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HepatitisComponent } from './hepatitis.component';

describe('HepatitisComponent', () => {
  let component: HepatitisComponent;
  let fixture: ComponentFixture<HepatitisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HepatitisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HepatitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
