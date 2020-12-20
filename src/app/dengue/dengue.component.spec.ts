import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengueComponent } from './dengue.component';

describe('DengueComponent', () => {
  let component: DengueComponent;
  let fixture: ComponentFixture<DengueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DengueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DengueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
