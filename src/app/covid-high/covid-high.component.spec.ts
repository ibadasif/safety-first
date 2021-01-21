import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidHighComponent } from './covid-high.component';

describe('CovidHighComponent', () => {
  let component: CovidHighComponent;
  let fixture: ComponentFixture<CovidHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
