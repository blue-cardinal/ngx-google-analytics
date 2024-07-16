import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGoogleAnalyticsComponent } from './ngx-google-analytics.component';

describe('NgxGoogleAnalyticsComponent', () => {
  let component: NgxGoogleAnalyticsComponent;
  let fixture: ComponentFixture<NgxGoogleAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGoogleAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGoogleAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
