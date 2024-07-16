import { APP_INITIALIZER, isDevMode, PLATFORM_ID, Provider } from "@angular/core";
import { GtagFn } from "../types/gtag.type";
import { NgxGoogleAnalyticsSettings } from "../interfaces/settings.interface";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { GTAG_FN } from "../tokens/gtag.token";
import { NGX_GOOGLE_ANALYTICS_SETTINGS } from "../tokens/settings.token";



export const NGX_GOOGLE_ANALYTICS_INITIALIZER_PROVIDER: Provider = {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: GoogleAnalyticsInitializer,
    deps: [
        DOCUMENT,
        GTAG_FN,
        NGX_GOOGLE_ANALYTICS_SETTINGS,
        PLATFORM_ID
    ]
};

export function GoogleAnalyticsInitializer(document: Document, gtag: GtagFn, settings: NgxGoogleAnalyticsSettings, platformId: string): () => Promise<void> {

    return () => new Promise((resolve, reject) => {

        // Only apply google analytics operations within the browser.
        if(!isPlatformBrowser(platformId)) {
            resolve();
        }

        if (!settings.trackingCode) {
    
            if (isDevMode()) {
                console.warn('Google analytics tracking not enabled. Missing tracking code.');
            }
    
            resolve();
    
        }

        if(!document) {
            if (isDevMode()) {
                console.warn('Google analytics tracking not enabled. Missing document reference.');
            }
    
            resolve();
        }

        const headElements = document.getElementsByTagName('head');
        
        if (headElements.length < 1) {
            
            if (isDevMode()) {
                console.warn('Google analytics tracking not enabled. Missing head HTML element(s)');
            }
            
            resolve();
            
        }
    
        const gScript = document.createElement('script');
        gScript.src = `https://www.googletagmanager.com/gtag/js?id=${settings.trackingCode}`;
        gScript.id = 'ngx-google-analytics-gscript';
        gScript.async = true
    
        headElements[0].appendChild(gScript);
    
        gtag('js', new Date());
        gtag('config', settings.trackingCode || '');

        if (isDevMode()) {
            console.log('Google analytics tracking enabled.');
        }

        resolve();

    });
}