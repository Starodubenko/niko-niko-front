import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NikoViewComponent} from './NikoView.component';
import {DataProviderModule} from "../../common/services/dataProvider";
import {NikoNikoModule} from "../../components/nikoNiko";
import {MetricsViewModule} from "../../components/metricsView";

@NgModule({
  declarations: [
    NikoViewComponent
  ],
  imports: [
    BrowserModule,
      DataProviderModule,
      NikoNikoModule,
      MetricsViewModule
  ],
  exports: [
    NikoViewComponent
  ]
})
export class NikoViewModule { }
