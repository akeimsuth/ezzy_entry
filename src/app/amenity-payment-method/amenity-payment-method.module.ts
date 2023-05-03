import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmenityPaymentMethodPageRoutingModule } from './amenity-payment-method-routing.module';

import { AmenityPaymentMethodPage } from './amenity-payment-method.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AmenityPaymentMethodPageRoutingModule
  ],
  declarations: [AmenityPaymentMethodPage]
})
export class AmenityPaymentMethodPageModule {}
