import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEventsComponent } from './ng-events.component';

describe('NgEventsComponent', () => {
  let component: NgEventsComponent;
  let fixture: ComponentFixture<NgEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
