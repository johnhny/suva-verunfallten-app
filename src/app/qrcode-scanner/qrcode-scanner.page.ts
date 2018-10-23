import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ClaimStatusService } from '../shared/claim-status.service';

@Component({
    selector: 'app-qrcode-scanner',
    templateUrl: './qrcode-scanner.page.html',
    styleUrls: ['./qrcode-scanner.page.scss'],
})
export class QRCodeScannerPage {
    cameraDevices: any[];
    cameraDevice: any;

    constructor(private router: Router) {
    }

    camerasFound(cameraDevices: any) {
        this.cameraDevices = cameraDevices;
        if (cameraDevices && cameraDevices.length > 0) {
            this.cameraDevice = cameraDevices.length > 1 ? cameraDevices[1] : cameraDevices[0];
        }
    }

    switchCamera() {
        this.cameraDevice = this.cameraDevices.find(cameraDevice => cameraDevice !== this.cameraDevice);
    }

    scanSuccess(data: any) {
        const targetPage = data.replace('https://suva.netlify.com', '');
        this.router.navigateByUrl(targetPage);
    }
}
