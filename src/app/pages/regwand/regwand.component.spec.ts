import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegwandComponent } from './regwand.component';

describe('RegwandComponent', () => {
  let component: RegwandComponent;
  let fixture: ComponentFixture<RegwandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegwandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegwandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
