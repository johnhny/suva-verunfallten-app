import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimStatusService } from '../shared/claim-status.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/internal/operators';
import { filter } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';

@Component({
    selector: 'app-unfall',
    templateUrl: 'unfall.page.html',
    styleUrls: ['unfall.page.scss']
})
export class UnfallPage {
    claimStatus$: Observable<any>;

    constructor(private route: ActivatedRoute,
                private claimStatusService: ClaimStatusService,
                private http: HttpClient) {

        this.claimStatus$ = this.route.params.pipe(
            filter(params => !!params.id),
            switchMap(params => this.http.get<any>(`/assets/claims/${params.id}.json`)),
            switchMap(data => this.claimStatusService.getClaimStatusInfo(data.claimStatusRequest))
        );
    }
}
