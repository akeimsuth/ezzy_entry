import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFrequestEntriesPage } from './add-frequest-entries.page';

const routes: Routes = [
  {
    path: '',
    component: AddFrequestEntriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFrequestEntriesPageRoutingModule {}
