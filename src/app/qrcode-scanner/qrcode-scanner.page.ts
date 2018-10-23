import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
    selector: 'app-qrcode-scanner',
    templateUrl: './qrcode-scanner.page.html',
    styleUrls: ['./qrcode-scanner.page.scss'],
})
export class QRCodeScannerPage {
    cameraDevices: any[];

    @ViewChild('scanner') scanner: ZXingScannerComponent;

    constructor(private router: Router) {
    }

    camerasFound(cameraDevices: any) {
        console.log('camerasFound', cameraDevices);
        this.cameraDevices = cameraDevices;
        if (cameraDevices && cameraDevices.length > 0) {
            // this.cameraDevice = cameraDevices.length > 1 ? cameraDevices[1] : cameraDevices[0];
            const cameraDevice = cameraDevices.length > 1 ? cameraDevices[1] : cameraDevices[0];
            this.scanner.startScan(cameraDevice);
        }
    }

    switchCamera() {
        //this.cameraDevice = this.cameraDevices.find(cameraDevice => cameraDevice !== this.cameraDevice);
        const cameraDevice = this.cameraDevices.find(cameraDevice => cameraDevice !== this.scanner.device);
        //this.scanner.resetScan();
        this.scanner.startScan(cameraDevice);
    }

    scanSuccess(data: any) {
        const targetPage = data.replace('https://suva.netlify.com', '');
        this.router.navigateByUrl(targetPage);
    }
}
