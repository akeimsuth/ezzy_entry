import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyGatePassPage } from './family-gate-pass.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyGatePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyGatePassPageRoutingModule {}
