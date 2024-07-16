import { InjectionToken } from "@angular/core";
import { NgxGoogleAnalyticsSettings } from "../interfaces/settings.interface";


export const NGX_GOOGLE_ANALYTICS_SETTINGS = new InjectionToken<NgxGoogleAnalyticsSettings>('ngx-settings', {
    providedIn: 'root',
    factory: () => ({})
});
