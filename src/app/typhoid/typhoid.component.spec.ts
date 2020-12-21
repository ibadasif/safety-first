import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyphoidComponent } from './typhoid.component';

describe('TyphoidComponent', () => {
  let component: TyphoidComponent;
  let fixture: ComponentFixture<TyphoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyphoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyphoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
