import { TestBed } from '@angular/core/testing';

import { UpdateGuestService } from './update-guest.service';

describe('UpdateGuestService', () => {
  let service: UpdateGuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateGuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
