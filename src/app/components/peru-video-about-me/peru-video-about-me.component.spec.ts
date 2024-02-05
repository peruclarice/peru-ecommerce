import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruVideoAboutMeComponent } from './peru-video-about-me.component';

describe('PeruVideoAboutMeComponent', () => {
  let component: PeruVideoAboutMeComponent;
  let fixture: ComponentFixture<PeruVideoAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeruVideoAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeruVideoAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
