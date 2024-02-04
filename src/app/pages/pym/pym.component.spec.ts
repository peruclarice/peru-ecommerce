import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PymComponent } from './pym.component';

describe('PymComponent', () => {
  let component: PymComponent;
  let fixture: ComponentFixture<PymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
