import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryCallPageRoutingModule } from './entry-call-routing.module';

import { EntryCallPage } from './entry-call.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    EntryCallPageRoutingModule
  ],
  declarations: [EntryCallPage]
})
export class EntryCallPageModule {}
