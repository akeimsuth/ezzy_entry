import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowServicemanPage } from './allow-serviceman.page';

const routes: Routes = [
  {
    path: '',
    component: AllowServicemanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowServicemanPageRoutingModule {}
