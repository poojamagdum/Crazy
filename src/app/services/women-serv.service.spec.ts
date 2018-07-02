import { TestBed, inject } from '@angular/core/testing';

import { WomenServService } from './women-serv.service';

describe('WomenServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WomenServService]
    });
  });

  it('should be created', inject([WomenServService], (service: WomenServService) => {
    expect(service).toBeTruthy();
  }));
});
