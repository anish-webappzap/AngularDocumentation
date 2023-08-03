import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
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
import { NavigatingRoutesProgramaticallyComponent } from './navigating-routes-programatically/navigating-routes-programatically.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ComponentLifecycleHookComponent } from './component-lifecycle-hook/component-lifecycle-hook.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { RendererComponent } from './renderer/renderer.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ModulesComponent } from './modules/modules.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';



@NgModule({
  declarations: [
    AngularComponent,
    DataBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    RoutingComponent,
    StyleRoutingComponent,
    NestedChildRoutesComponent,
    NavigatingRoutesProgramaticallyComponent,
    InputOutputComponent,
    ComponentLifecycleHookComponent,
    ViewchildComponent,
    RendererComponent,
    PipesComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ModulesComponent,
    LazyLoadingComponent,
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
