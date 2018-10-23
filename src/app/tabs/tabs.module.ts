import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { PrevensionPageModule } from '../prevension/prevension.module';
import { UnfallPageModule } from '../unfall/unfall.module';
import { FussballtestPageModule } from '../fussballtest/fussballtest.module';
import { FitnesstestPageModule } from '../fitnesstest/fitnesstest.module';
import {AboutPageModule} from '../about/about.module';
import { DocumentsPageModule } from '../documents/documents.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        UnfallPageModule,
        PrevensionPageModule,
        AboutPageModule,
        FussballtestPageModule,
        FitnesstestPageModule,
        DocumentsPageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
