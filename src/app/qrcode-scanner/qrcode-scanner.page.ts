import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
    selector: 'app-qrcode-scanner',
    templateUrl: './qrcode-scanner.page.html',
    styleUrls: ['./qrcode-scanner.page.scss'],
})
export class QRCodeScannerPage implements OnDestroy {
    cameraDevices: any[];

    @ViewChild('scanner') scanner: ZXingScannerComponent;

    constructor(private router: Router) {
    }

    ngOnDestroy() {
        this.scanner.resetScan();
    }

    camerasFound(cameraDevices: any) {
        console.log('camerasFound', cameraDevices);
        this.cameraDevices = cameraDevices;
        if (cameraDevices && cameraDevices.length > 0) {
            const cameraDevice = this.getRearCamera(cameraDevices);
            this.scanner.startScan(cameraDevice);
            this.scanner.device = cameraDevice;
        }
    }

    getRearCamera(cameraDevices): any {
        const rearCamera = cameraDevices.find(cameraDevice => this.isRearCamera(cameraDevice));
        return rearCamera || cameraDevices[0];
    }

    isRearCamera(cameraDevice): boolean {
        const cameraName = cameraDevice.label.toLowerCase();
        return cameraName.indexOf('back') >= 0
            || cameraName.indexOf('rear') >= 0
            || cameraName.indexOf('rück') >= 0;
    }

    switchCamera() {
        const cameraDevice = this.cameraDevices.find(cameraDevice => cameraDevice.deviceId !== this.scanner.device.deviceId);
        console.log('switchCamera', cameraDevice, this.scanner.device);
        this.scanner.changeDevice(cameraDevice);
        this.scanner.device = cameraDevice;
    }

    scanSuccess(data: any) {
        const targetPage = data.replace('https://suva.netlify.com', '');
        this.router.navigateByUrl(targetPage);
    }
}
