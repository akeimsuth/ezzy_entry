import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowGuestPage } from './allow-guest.page';

const routes: Routes = [
  {
    path: '',
    component: AllowGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowGuestPageRoutingModule {}
