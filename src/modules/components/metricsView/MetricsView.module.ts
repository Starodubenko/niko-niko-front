import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MetricsViewComponent} from './MetricsView.component';

@NgModule({
  declarations: [
    MetricsViewComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    MetricsViewComponent
  ]
})
export class MetricsViewModule { }
