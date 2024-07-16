import { TestBed } from '@angular/core/testing';

import { NgxGoogleAnalyticsService } from './ngx-google-analytics.service';

describe('NgxGoogleAnalyticsService', () => {
  let service: NgxGoogleAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxGoogleAnalyticsService]
    });
    service = TestBed.inject(NgxGoogleAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
