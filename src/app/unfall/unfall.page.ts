import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClaimStatusService} from '../shared/claim-status.service';
import {HttpClient} from '@angular/common/http';
import {filter, switchMap, tap} from 'rxjs/internal/operators';
import {from, Observable} from 'rxjs/index';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-unfall',
    templateUrl: 'unfall.page.html',
    styleUrls: ['unfall.page.scss']
})
export class UnfallPage {
    claimStatus$: Observable<any>;

    doBusiness(unfallid: string) {
      this.claimStatus$ = this.http.get<any>(`/assets/claims/${unfallid}.json`).pipe(
          switchMap(data => this.claimStatusService.getClaimStatusInfo(data.claimStatusRequest))
      );
    }

    constructor(private route: ActivatedRoute,
                private claimStatusService: ClaimStatusService,
                private http: HttpClient,
                private localStorage: Storage) {

      this.claimStatus$ = this.route.params.pipe(
        filter(params => !!params.id),
        tap(params => this.localStorage.set('params', params)),
        switchMap(params => this.http.get<any>(`/assets/claims/${params.id}.json`)),
        switchMap(data => this.claimStatusService.getClaimStatusInfo(data.claimStatusRequest))
      );

      this.claimStatus$ = from(this.localStorage.get('unfallId')).pipe(
          filter(params => !!params.id),
          switchMap(params => this.http.get<any>(`/assets/claims/${params.id}.json`)),
          switchMap(data => this.claimStatusService.getClaimStatusInfo(data.claimStatusRequest))
      );
    }


}
