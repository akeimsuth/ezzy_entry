import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookedAmenitiesPage } from './booked-amenities.page';

const routes: Routes = [
  {
    path: '',
    component: BookedAmenitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookedAmenitiesPageRoutingModule {}
