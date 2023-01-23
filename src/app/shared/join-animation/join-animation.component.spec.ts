import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAnimationComponent } from './join-animation.component';

describe('JoinAnimationComponent', () => {
  let component: JoinAnimationComponent;
  let fixture: ComponentFixture<JoinAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
