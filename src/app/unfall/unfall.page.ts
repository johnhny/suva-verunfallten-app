import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaimStatusService } from '../shared/claim-status.service';

@Component({
    selector: 'app-unfall',
    templateUrl: 'unfall.page.html',
    styleUrls: ['unfall.page.scss']
})
export class UnfallPage {
    claimStatus: any;

    constructor(private route: ActivatedRoute,
                private claimStatusService: ClaimStatusService) {
        this.route.params.subscribe(params => {
            console.log('Routerparams: ', params);
        });
    }

    loadClaimStatus() {
        const claimStatusRequest = {
            treatmentDate: null,
            birthDate: '1996-08-06',
            lastname: null,
            firstname: null,
            claimNr: {nr: '24.21807.17.8'},
            svNr: null,
            accidentDate: null
        };
        this.claimStatusService.getClaimStatusInfo(claimStatusRequest)
            .subscribe(claimStatus => this.claimStatus = claimStatus);
    }
}
