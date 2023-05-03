import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDailyHelpsPage } from './add-daily-helps.page';

const routes: Routes = [
  {
    path: '',
    component: AddDailyHelpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDailyHelpsPageRoutingModule {}
