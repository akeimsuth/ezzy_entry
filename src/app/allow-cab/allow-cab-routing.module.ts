import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowCabPage } from './allow-cab.page';

const routes: Routes = [
  {
    path: '',
    component: AllowCabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowCabPageRoutingModule {}
