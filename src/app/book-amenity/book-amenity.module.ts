import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAmenityPageRoutingModule } from './book-amenity-routing.module';

import { BookAmenityPage } from './book-amenity.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BookAmenityPageRoutingModule
  ],
  declarations: [BookAmenityPage]
})
export class BookAmenityPageModule {}
