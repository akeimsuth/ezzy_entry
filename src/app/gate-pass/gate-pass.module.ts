import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatePassPageRoutingModule } from './gate-pass-routing.module';

import { GatePassPage } from './gate-pass.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GatePassPageRoutingModule
  ],
  declarations: [GatePassPage]
})
export class GatePassPageModule {}
