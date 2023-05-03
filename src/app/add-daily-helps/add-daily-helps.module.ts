import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDailyHelpsPageRoutingModule } from './add-daily-helps-routing.module';

import { AddDailyHelpsPage } from './add-daily-helps.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddDailyHelpsPageRoutingModule
  ],
  declarations: [AddDailyHelpsPage]
})
export class AddDailyHelpsPageModule {}
