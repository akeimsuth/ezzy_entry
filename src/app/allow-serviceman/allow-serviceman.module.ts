import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllowServicemanPageRoutingModule } from './allow-serviceman-routing.module';

import { AllowServicemanPage } from './allow-serviceman.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AllowServicemanPageRoutingModule
  ],
  declarations: [AllowServicemanPage]
})
export class AllowServicemanPageModule {}
