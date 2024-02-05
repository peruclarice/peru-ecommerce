import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPeruComponent } from './about-peru.component';

describe('AboutPeruComponent', () => {
  let component: AboutPeruComponent;
  let fixture: ComponentFixture<AboutPeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPeruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
