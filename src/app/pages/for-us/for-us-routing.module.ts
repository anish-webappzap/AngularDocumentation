import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForUsComponent } from './for-us.component';
import { PageFindComponent } from './page-find/page-find.component';
import { InsertDropdownComponent } from './insert-dropdown/insert-dropdown.component';
import { InsertCheckboxComponent } from './insert-checkbox/insert-checkbox.component';
import { InsertRadioComponent } from './insert-radio/insert-radio.component';

const routes: Routes = [
  {path:'',component:ForUsComponent},
  {path:'page-find',component:PageFindComponent},
  {path:'insert-dropdown',component:InsertDropdownComponent},
  {path:'insert-checkbox',component:InsertCheckboxComponent},
  {path:'insert-radio',component:InsertRadioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForUsRoutingModule { }
