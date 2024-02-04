import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixrComponent } from './elixr.component';

describe('ElixrComponent', () => {
  let component: ElixrComponent;
  let fixture: ComponentFixture<ElixrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElixrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElixrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
