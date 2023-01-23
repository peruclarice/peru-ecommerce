import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAnimationComponent } from './cta-animation.component';

describe('CtaAnimationComponent', () => {
  let component: CtaAnimationComponent;
  let fixture: ComponentFixture<CtaAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
