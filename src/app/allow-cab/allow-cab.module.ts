import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllowCabPageRoutingModule } from './allow-cab-routing.module';

import { AllowCabPage } from './allow-cab.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AllowCabPageRoutingModule
  ],
  declarations: [AllowCabPage]
})
export class AllowCabPageModule {}
