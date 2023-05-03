import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintInfoPage } from './complaint-info.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintInfoPageRoutingModule {}
