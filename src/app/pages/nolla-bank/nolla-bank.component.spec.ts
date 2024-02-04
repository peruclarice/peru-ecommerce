import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NollaBankComponent } from './nolla-bank.component';

describe('NollaBankComponent', () => {
  let component: NollaBankComponent;
  let fixture: ComponentFixture<NollaBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NollaBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NollaBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
