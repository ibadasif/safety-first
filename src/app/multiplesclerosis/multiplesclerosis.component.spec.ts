import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesclerosisComponent } from './multiplesclerosis.component';

describe('MultiplesclerosisComponent', () => {
  let component: MultiplesclerosisComponent;
  let fixture: ComponentFixture<MultiplesclerosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplesclerosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplesclerosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
