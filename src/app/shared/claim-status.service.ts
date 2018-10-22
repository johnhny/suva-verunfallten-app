import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SecurityTokenService } from './security-token.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ClaimStatusService {
    static readonly CLAIM_STATUS_INFO_URL = '/claimsmanagement/ClaimStatusInfo/2.2.0/claimStatusInfo';

    constructor(private httpClient: HttpClient,
                private securityTokenService: SecurityTokenService) {
    }

    getClaimStatusInfo(claimStatusInfoQuery: any): Observable<any> {
        return this.securityTokenService.getToken()
            .pipe(
                switchMap(token => this.loadClaimStatusInfo(token.access_token, claimStatusInfoQuery))
            );
    }

    private loadClaimStatusInfo(token: String,
                                claimStatusInfoQuery: any): Observable<any> {
        const options = {
            headers: {
                Authorization: 'Bearer ' + token,
                'Suva-User-Language': 'de'
            },
            withCredentials: true
        };

        return this.httpClient.post<any>(ClaimStatusService.CLAIM_STATUS_INFO_URL, claimStatusInfoQuery, options);
    }
}
