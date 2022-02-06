import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekcjaComponent } from './lekcja.component';

describe('LekcjaComponent', () => {
  let component: LekcjaComponent;
  let fixture: ComponentFixture<LekcjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekcjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekcjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
