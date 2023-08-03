import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'angular', loadChildren: () => import('./pages/angular/angular.module').then(m => m.AngularModule) },
  { path: 'command', loadChildren: () => import('./pages/command/command.module').then(m => m.CommandModule) },
  { path: 'for-us', loadChildren: () => import('./pages/for-us/for-us.module').then(m => m.ForUsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
