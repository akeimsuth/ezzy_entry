import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllowDeliverymanPageRoutingModule } from './allow-deliveryman-routing.module';

import { AllowDeliverymanPage } from './allow-deliveryman.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AllowDeliverymanPageRoutingModule
  ],
  declarations: [AllowDeliverymanPage]
})
export class AllowDeliverymanPageModule {}
