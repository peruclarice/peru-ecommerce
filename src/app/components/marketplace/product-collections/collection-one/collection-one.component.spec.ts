import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionOneComponent } from './collection-one.component';

describe('CollectionOneComponent', () => {
  let component: CollectionOneComponent;
  let fixture: ComponentFixture<CollectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
