import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryCallPage } from './entry-call.page';

const routes: Routes = [
  {
    path: '',
    component: EntryCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryCallPageRoutingModule {}
