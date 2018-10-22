import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
    providedIn: 'root'
})
export class SecurityTokenService {
    static readonly API_URL = '/token';
    static readonly CONSUMER_KEY = 'Ljxndssmai7WL75pU9Zx29m5c98a';
    static readonly CONSUMER_SECRET = 'hgQT1kZPi4lTx_ORFDsPyh1fBrca';

    private tokenCache: any;

    constructor(private httpClient: HttpClient) {}

    getToken(): Observable<any> {
        if (this.tokenCache) {
            return of(this.tokenCache);
        }

        const options = {
            headers: { Authorization: 'Basic ' + SecurityTokenService.defineSecret() },
            params: { grant_type: 'client_credentials' },
            withCredentials: true
        };
        return this.httpClient.post<any>(SecurityTokenService.API_URL, undefined, options).pipe(
            tap(token => this.tokenCache = token)
        );
    }

    private static defineSecret(): string {
        return btoa(`${SecurityTokenService.CONSUMER_KEY}:${SecurityTokenService.CONSUMER_SECRET}`);
    }
}
