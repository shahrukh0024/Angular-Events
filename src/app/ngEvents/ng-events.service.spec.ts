import { TestBed } from '@angular/core/testing';

import { NgEventsService } from './ng-events.service';

describe('NgEventsService', () => {
  let service: NgEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
