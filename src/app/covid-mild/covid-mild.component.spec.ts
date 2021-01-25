import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidMildComponent } from './covid-mild.component';

describe('CovidMildComponent', () => {
  let component: CovidMildComponent;
  let fixture: ComponentFixture<CovidMildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidMildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
