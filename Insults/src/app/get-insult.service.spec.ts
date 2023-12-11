import { TestBed } from '@angular/core/testing';

import { GetInsultService } from './get-insult.service';

describe('GetInsultService', () => {
  let service: GetInsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
