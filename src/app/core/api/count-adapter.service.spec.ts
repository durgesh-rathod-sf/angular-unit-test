import { TestBed } from '@angular/core/testing';

import { CountAdapter } from './count-adapter.service';

describe('CountAdapterService', () => {
  let service: CountAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountAdapter],
    });
    service = TestBed.inject(CountAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
