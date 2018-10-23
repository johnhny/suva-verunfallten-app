import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClaimStatusService} from '../shared/claim-status.service';
import {HttpClient} from '@angular/common/http';
import {filter, map, switchMap, tap} from 'rxjs/internal/operators';
import {from, Observable} from 'rxjs/index';
import {Storage} from '@ionic/storage';


@Component({
    selector: 'app-unfall',
    templateUrl: 'unfall.page.html',
    styleUrls: ['unfall.page.scss']
})
export class UnfallPage {
    claim$: Observable<any>;
    cameraDevices: any[];
    cameraDevice: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private claimStatusService: ClaimStatusService,
                private http: HttpClient,
                private localStorage: Storage) {

        this.claim$ = this.route.params.pipe(
            switchMap(params => from(this.localStorage.get('params')).pipe(map(localStorageParams => {
                return params.id ? params : localStorageParams;
            }))),
            tap(params => this.localStorage.set('params', params)),
            filter(params => !!params && !!params.id),
            switchMap(params => this.http.get<any>(`/assets/claims/${params.id}.json`)),
            switchMap(claim => this.claimStatusService.getClaimStatusInfo(claim.claimStatusRequest).pipe(map(claimStatus => {
                return {...claim, claimStatus};
            })))
        );
    }

    getStatusText(statementInfoCode: number, claimCloseDate): string {
        switch (statementInfoCode) {
            case 11:
                return 'Schadenfall ist offen.';
            case 21:
                return 'Schadenfall ist anerkannt.';
            case 31:
                return 'Schadenfall ist abgelehnt.';
            case 41:
                if (new Date(claimCloseDate) <= new Date()) {
                    return 'Schadenfall ist abgeschlossen.';
                } else {
                    return 'Schadenfall ist abgeschlossen.';
                }
            case 51:
                return 'Unfall mit Rückfall.';
            default:
                return null;
        }
    }

    getStatusIcon(statementInfoCode: number): string {
        switch (statementInfoCode) {
            case 11:
                return 'folder';
            case 21:
                return 'checkmark-circle';
            case 31:
                return 'close-circle-outline';
            case 41:
                return 'archive';
            default:
                return '';
        }
    }

    camerasFound(cameraDevices: any) {
        console.log('camerasFound', cameraDevices);
        this.cameraDevices = cameraDevices;
        if (cameraDevices && cameraDevices.length > 0) {
            this.cameraDevice = cameraDevices.length > 1 ? cameraDevices[1] : cameraDevices[0];
        }
    }

    switchCamera() {
        this.cameraDevice = this.cameraDevices.find(cameraDevice => cameraDevice !== this.cameraDevice);
    }

    scanSuccess(data: any) {
        console.log('scanSuccess', data);
        const targetPage = data.replace('https://suva.netifly.com', '');
        console.log('navigateTo', targetPage);
        this.router.navigateByUrl(targetPage);
    }
}
