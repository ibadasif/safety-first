import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnescarsComponent } from './acnescars.component';

describe('AcnescarsComponent', () => {
  let component: AcnescarsComponent;
  let fixture: ComponentFixture<AcnescarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcnescarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnescarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
