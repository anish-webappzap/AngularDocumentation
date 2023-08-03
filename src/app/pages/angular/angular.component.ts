import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {
  classActive:any='Data Binding';
  snippetUrl:any='data-binding';
  playList:any=[
    {
      name:'Data Binding',
      url:'data-binding'
    },
    {
      name:'Interpolation',
      url:'interpolation'
    },
    {
      name:'Property Binding',
      url:'property-binding'
    },
    {
      name:'Class and Style Binding',
      url:'style-binding'
    },
    {
      name:'Event Binding',
      url:'event-binding'
    },
    {
      name:'Two Way Data Binding',
      url:'two-way-binding'
    },
    {
      name:'Ngif, Else and Then',
      url:'ngif'
    },
    {
      name:'NgSwicth',
      url:'ngswitch'
    },
    {
      name:'ngFor',
      url:'ngfor'
    },
    {
      name:'Routing',
      url:'routing'
    },
    // {
    //   name:'Style Routing',
    //   url:'style-routing'
    // },
    // {
    //   name:'Nested and Child Routes',
    //   url:'nested-child-routes'
    // },
    // {
    //   name:'Navigating Routes Programatically',
    //   url:'navigating-routes-programatically'
    // },
    {
      name:'Input & Output',
      url:'input-output'
    },
    {
      name:'Component Lifecycle Hook',
      url:'component-lifecycle-hook'
    },
    {
      name:'Viewchild',
      url:'viewchild'
    },
    {
      name:'Renderer',
      url:'renderer'
    },
    {
      name:'Pipes',
      url:'pipes'
    },
    {
      name:'Template Driven Form',
      url:'template-driven-form'
    },
    {
      name:'Reactive Form',
      url:'reactive-form'
    },
    {
      name:'Modules',
      url:'modules'
    },
    {
      name:'Lazy Loading',
      url:'lazy-loading'
    },
  ]
  ngOnInit():void{
    this.classActive=sessionStorage.getItem('classActive');
  }
  activeClass(item:any){
      this.classActive=item.name;
      this.snippetUrl=item.url;
      sessionStorage.setItem('classActive',this.classActive);
  }
}
