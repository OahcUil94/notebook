import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRouteRoutingModule } from './lazy-route-routing.module';
import { LazyRouteComponent } from './lazy-route.component';


@NgModule({
  declarations: [LazyRouteComponent],
  imports: [
    CommonModule,
    LazyRouteRoutingModule
  ]
})
export class LazyRouteModule { }
