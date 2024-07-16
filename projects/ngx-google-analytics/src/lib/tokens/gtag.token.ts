import { InjectionToken } from "@angular/core";
import { GtagFn } from "../types/gtag.type";


export const GTAG_FN = new InjectionToken<GtagFn>('gtag-fn', {
    providedIn: 'root',
    factory: () => {
        const globalWindow = (window as any);

        if (globalWindow.gtag) {
            return globalWindow.gtag;
        }

        globalWindow.dataLayer = (globalWindow.dataLayer as any[]) || [];

        return function() {
            globalWindow.dataLayer.push(arguments);
        }
    }
});
