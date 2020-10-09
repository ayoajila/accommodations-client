import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(GreetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
