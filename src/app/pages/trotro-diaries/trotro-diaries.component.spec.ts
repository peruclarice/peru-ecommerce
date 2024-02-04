import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrotroDiariesComponent } from './trotro-diaries.component';

describe('TrotroDiariesComponent', () => {
  let component: TrotroDiariesComponent;
  let fixture: ComponentFixture<TrotroDiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrotroDiariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrotroDiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
