import { TestBed, inject } from '@angular/core/testing';

import { IndicadorsService } from './indicadors.service';

describe('IndicadorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicadorsService]
    });
  });

  it('should be created', inject([IndicadorsService], (service: IndicadorsService) => {
    expect(service).toBeTruthy();
  }));
});
