import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexPayComponent } from './vertex-pay.component';

describe('VertexPayComponent', () => {
  let component: VertexPayComponent;
  let fixture: ComponentFixture<VertexPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertexPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertexPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
