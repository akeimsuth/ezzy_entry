import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectAmenityPageRoutingModule } from './select-amenity-routing.module';

import { SelectAmenityPage } from './select-amenity.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SelectAmenityPageRoutingModule
  ],
  declarations: [SelectAmenityPage]
})
export class SelectAmenityPageModule {}
