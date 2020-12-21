import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenzaComponent } from './influenza.component';

describe('InfluenzaComponent', () => {
  let component: InfluenzaComponent;
  let fixture: ComponentFixture<InfluenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluenzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
