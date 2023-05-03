import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintInfoPageRoutingModule } from './complaint-info-routing.module';

import { ComplaintInfoPage } from './complaint-info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ComplaintInfoPageRoutingModule
  ],
  declarations: [ComplaintInfoPage]
})
export class ComplaintInfoPageModule {}
