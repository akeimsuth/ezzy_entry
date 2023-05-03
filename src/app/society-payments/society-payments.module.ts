import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyPaymentsPageRoutingModule } from './society-payments-routing.module';

import { SocietyPaymentsPage } from './society-payments.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SocietyPaymentsPageRoutingModule
  ],
  declarations: [SocietyPaymentsPage]
})
export class SocietyPaymentsPageModule {}
