import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlzheimerComponent } from './alzheimer.component';

describe('AlzheimerComponent', () => {
  let component: AlzheimerComponent;
  let fixture: ComponentFixture<AlzheimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlzheimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlzheimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
