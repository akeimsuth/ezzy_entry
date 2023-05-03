import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedAmenitiesPageRoutingModule } from './booked-amenities-routing.module';

import { BookedAmenitiesPage } from './booked-amenities.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BookedAmenitiesPageRoutingModule
  ],
  declarations: [BookedAmenitiesPage]
})
export class BookedAmenitiesPageModule {}
