import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaiseComplaintPageRoutingModule } from './raise-complaint-routing.module';

import { RaiseComplaintPage } from './raise-complaint.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RaiseComplaintPageRoutingModule
  ],
  declarations: [RaiseComplaintPage]
})
export class RaiseComplaintPageModule {}
