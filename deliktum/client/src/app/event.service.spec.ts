import { TestBed, inject } from '@angular/core/testing';

import { EventService } from './event.service';
let evenService;
describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService]
    });
  });

  it('should be created', inject([EventService], (service: EventService) => {
  	evenService = EventService;
    expect(service).toBeTruthy();
  }));
});
