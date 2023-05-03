import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticesBoardPage } from './notices-board.page';

const routes: Routes = [
  {
    path: '',
    component: NoticesBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesBoardPageRoutingModule {}
