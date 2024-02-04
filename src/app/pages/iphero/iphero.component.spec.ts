import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpheroComponent } from './iphero.component';

describe('IpheroComponent', () => {
  let component: IpheroComponent;
  let fixture: ComponentFixture<IpheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
