import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMyVehiclePageRoutingModule } from './add-my-vehicle-routing.module';

import { AddMyVehiclePage } from './add-my-vehicle.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddMyVehiclePageRoutingModule
  ],
  declarations: [AddMyVehiclePage]
})
export class AddMyVehiclePageModule {}
