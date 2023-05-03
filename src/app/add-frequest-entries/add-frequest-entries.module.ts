import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFrequestEntriesPageRoutingModule } from './add-frequest-entries-routing.module';

import { AddFrequestEntriesPage } from './add-frequest-entries.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddFrequestEntriesPageRoutingModule
  ],
  declarations: [AddFrequestEntriesPage]
})
export class AddFrequestEntriesPageModule {}
