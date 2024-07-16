import { ModuleWithProviders, NgModule } from "@angular/core";
import { NGX_GOOGLE_ANALYTICS_SETTINGS } from "./tokens/settings.token";
import { NgxGoogleAnalyticsSettings } from "./interfaces/settings.interface";
import { NGX_GOOGLE_ANALYTICS_INITIALIZER_PROVIDER } from "./providers/google-analytics.provider";


@NgModule()
export class NgxGoogleAnalyticsModule {

    public static forRoot(settings: NgxGoogleAnalyticsSettings): ModuleWithProviders<NgxGoogleAnalyticsModule> {
        return {
            ngModule: NgxGoogleAnalyticsModule,
            providers: [
                {
                    provide: NGX_GOOGLE_ANALYTICS_SETTINGS,
                    useValue: settings
                },
                NGX_GOOGLE_ANALYTICS_INITIALIZER_PROVIDER
            ]
        };
    }

}