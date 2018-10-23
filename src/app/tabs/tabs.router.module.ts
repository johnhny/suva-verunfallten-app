import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { UnfallPage } from '../unfall/unfall.page';
import { PrevensionPage } from '../prevension/prevension.page';
import { FussballtestPage } from '../fussballtest/fussballtest.page';
import { AboutPage } from '../about/about.page';
import { FitnesstestPage} from '../fitnesstest/fitnesstest.page';
import { DocumentsPage } from '../documents/documents.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(unfall:unfall)',
                pathMatch: 'full',
            },
            {
                path: 'unfall/:id',
                outlet: 'unfall',
                component: UnfallPage
            },
            {
                path: 'unfall',
                outlet: 'unfall',
                component: UnfallPage
            },
            {
                path: 'prevension',
                outlet: 'prevension',
                component: PrevensionPage
            },
            {
                path: 'fussballtest',
                outlet: 'prevension',
                component: FussballtestPage
            },
            {
                path: 'about',
                outlet: 'about',
                component: AboutPage
            },
            {
              path: 'fitnesstest',
              outlet: 'prevension',
              component: FitnesstestPage
            },
            {
              path: 'documents',
              outlet: 'unfall',
              component: DocumentsPage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(unfall:unfall)',
        pathMatch: 'full'
    },
    {
        path: 'unfall/:id',
        redirectTo: '/tabs/(unfall:unfall/:id)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
