import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QxpComponent } from './qxp.component';

describe('QxpComponent', () => {
  let component: QxpComponent;
  let fixture: ComponentFixture<QxpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QxpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QxpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
