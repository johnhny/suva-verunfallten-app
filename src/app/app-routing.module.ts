import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'fitnesstest', loadChildren: './fitnesstest/fitnesstest.module#FitnesstestPageModule' },
  { path: 'documents', loadChildren: './documents/documents.module#DocumentsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
