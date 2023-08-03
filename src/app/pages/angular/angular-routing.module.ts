import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { RoutingComponent } from './routing/routing.component';
import { StyleRoutingComponent } from './style-routing/style-routing.component';
import { NestedChildRoutesComponent } from './nested-child-routes/nested-child-routes.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NavigatingRoutesProgramaticallyComponent } from './navigating-routes-programatically/navigating-routes-programatically.component';
import { ComponentLifecycleHookComponent } from './component-lifecycle-hook/component-lifecycle-hook.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { RendererComponent } from './renderer/renderer.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ModulesComponent } from './modules/modules.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

const routes: Routes = [
  {path:'',component:AngularComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'data-binding'},
    {path:'data-binding',component:DataBindingComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'property-binding',component:PropertyBindingComponent},
    {path:'style-binding',component:StyleBindingComponent},
    {path:'event-binding',component:EventBindingComponent},
    {path:'two-way-binding',component:TwoWayBindingComponent},
    {path:'ngif',component:NgifComponent},
    {path:'ngswitch',component:NgswitchComponent},
    {path:'ngfor',component:NgforComponent},
    {path:'routing',component:RoutingComponent},
    {path:'style-routing',component:StyleRoutingComponent},
    {path:'nested-child-routes',component:NestedChildRoutesComponent},
    {path:'navigating-routes-programatically',component:NavigatingRoutesProgramaticallyComponent},
    {path:'input-output',component:InputOutputComponent},
    {path:'component-lifecycle-hook',component:ComponentLifecycleHookComponent},
    {path:'viewchild',component:ViewchildComponent},
    {path:'renderer',component:RendererComponent},
    {path:'pipes',component:PipesComponent},
    {path:'template-driven-form',component:TemplateDrivenFormComponent},
    {path:'reactive-form',component:ReactiveFormComponent},
    {path:'modules',component:ModulesComponent},
    {path:'lazy-loading',component:LazyLoadingComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
