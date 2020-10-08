import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Factory method for the TranslateHttpLoader
 * @param httpClient HttpClient object used for http requests
 */
export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}