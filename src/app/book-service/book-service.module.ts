import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookServicePageRoutingModule } from './book-service-routing.module';

import { BookServicePage } from './book-service.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BookServicePageRoutingModule
  ],
  declarations: [BookServicePage]
})
export class BookServicePageModule {}
