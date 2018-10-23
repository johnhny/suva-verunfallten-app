import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QRCodeScannerPage } from './qrcode-scanner.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
    {
        path: '',
        component: QRCodeScannerPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ZXingScannerModule
    ],
    declarations: [QRCodeScannerPage]
})
export class QRCodeScannerPageModule {
}
