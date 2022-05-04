import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEventComponent } from './ng-event.component';

describe('NgEventComponent', () => {
  let component: NgEventComponent;
  let fixture: ComponentFixture<NgEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
