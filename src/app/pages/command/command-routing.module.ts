import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PrimengComponent } from './primeng/primeng.component';
import { CreateComponentComponent } from './create-component/create-component.component';

const routes: Routes = [
  {path:'',component:CommandComponent},
  {path:'page-create',component:PageCreateComponent},
  {path:'primeng',component:PrimengComponent},
  {path:'create-component',component:CreateComponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandRoutingModule { }
