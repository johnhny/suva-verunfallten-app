import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { UnfallPage } from '../unfall/unfall.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

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
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
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
export class TabsPageRoutingModule {}
