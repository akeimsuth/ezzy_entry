import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllowGuestPageRoutingModule } from './allow-guest-routing.module';

import { AllowGuestPage } from './allow-guest.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AllowGuestPageRoutingModule
  ],
  declarations: [AllowGuestPage]
})
export class AllowGuestPageModule {}
