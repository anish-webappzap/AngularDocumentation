import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandRoutingModule } from './command-routing.module';
import { CommandComponent } from './command.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PrimengComponent } from './primeng/primeng.component';
import { CreateComponentComponent } from './create-component/create-component.component';

@NgModule({
  declarations: [
    CommandComponent,
    PageCreateComponent,
    CommandComponent,
    PrimengComponent,
    CreateComponentComponent
  ],
  imports: [
    CommonModule,
    CommandRoutingModule
  ]
})
export class CommandModule { }
