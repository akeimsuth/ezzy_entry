import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatPostPage } from './creat-post.page';

const routes: Routes = [
  {
    path: '',
    component: CreatPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatPostPageRoutingModule {}
