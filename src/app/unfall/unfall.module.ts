import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnfallPage } from './unfall.page';
import { HttpClientModule } from '@angular/common/http';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
    {
        path: '',
        component: UnfallPage
    },
    {
        path: '/:id',
        component: UnfallPage
    }
];


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnfallPage]
})
export class UnfallPageModule {}
