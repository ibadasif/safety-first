import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidNormalComponent } from './covid-normal.component';

describe('CovidNormalComponent', () => {
  let component: CovidNormalComponent;
  let fixture: ComponentFixture<CovidNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
