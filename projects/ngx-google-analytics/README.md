# NgxGoogleAnalytics

This package provides a module that injects the Google Analytics tag manager script into your Angular project.

It provides some guard rails against including the tag manager script in a dev environment.

## How to use
Include the ngx-google-analytics module in your AppModule:

```ts

@NgModule({
    imports: [
        NgxGoogleAnalyticsModule.forRoot({
            trackingCode: 'YOUR_TRACKING_CODE',
        }),
    ]
})
export class AppModule { }
```
