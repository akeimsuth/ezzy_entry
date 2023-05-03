import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSocietyPageRoutingModule } from './select-society-routing.module';

import { SelectSocietyPage } from './select-society.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SelectSocietyPageRoutingModule
  ],
  declarations: [SelectSocietyPage]
})
export class SelectSocietyPageModule {}
