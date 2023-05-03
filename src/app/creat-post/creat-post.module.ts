import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatPostPageRoutingModule } from './creat-post-routing.module';

import { CreatPostPage } from './creat-post.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CreatPostPageRoutingModule
  ],
  declarations: [CreatPostPage]
})
export class CreatPostPageModule {}
