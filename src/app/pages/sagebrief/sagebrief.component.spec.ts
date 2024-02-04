import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagebriefComponent } from './sagebrief.component';

describe('SagebriefComponent', () => {
  let component: SagebriefComponent;
  let fixture: ComponentFixture<SagebriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagebriefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagebriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
