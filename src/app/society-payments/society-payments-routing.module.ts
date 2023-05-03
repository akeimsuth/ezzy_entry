import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyPaymentsPage } from './society-payments.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyPaymentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyPaymentsPageRoutingModule {}
