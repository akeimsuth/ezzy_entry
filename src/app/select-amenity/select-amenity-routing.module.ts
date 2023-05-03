import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAmenityPage } from './select-amenity.page';

const routes: Routes = [
  {
    path: '',
    component: SelectAmenityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAmenityPageRoutingModule {}
