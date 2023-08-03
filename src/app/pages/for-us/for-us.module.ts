import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForUsRoutingModule } from './for-us-routing.module';
import { ForUsComponent } from './for-us.component';
import { PageFindComponent } from './page-find/page-find.component';
import { InsertDropdownComponent } from './insert-dropdown/insert-dropdown.component';
import { InsertCheckboxComponent } from './insert-checkbox/insert-checkbox.component';
import { InsertRadioComponent } from './insert-radio/insert-radio.component';


@NgModule({
  declarations: [
    ForUsComponent,
    PageFindComponent,
    InsertDropdownComponent,
    InsertCheckboxComponent,
    InsertRadioComponent
  ],
  imports: [
    CommonModule,
    ForUsRoutingModule
  ]
})
export class ForUsModule { }
