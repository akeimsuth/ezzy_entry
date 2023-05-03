import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticesBoardPageRoutingModule } from './notices-board-routing.module';

import { NoticesBoardPage } from './notices-board.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NoticesBoardPageRoutingModule
  ],
  declarations: [NoticesBoardPage]
})
export class NoticesBoardPageModule {}
