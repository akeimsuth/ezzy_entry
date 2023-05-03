import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyGatePassPageRoutingModule } from './family-gate-pass-routing.module';

import { FamilyGatePassPage } from './family-gate-pass.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FamilyGatePassPageRoutingModule
  ],
  declarations: [FamilyGatePassPage]
})
export class FamilyGatePassPageModule {}
