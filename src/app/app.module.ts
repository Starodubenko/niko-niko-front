import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MetricsViewModule} from '../modules/components/metricsView';
import {ApiModule} from '../modules/api';
import {DataProviderModule} from '../modules/common/services/dataProvider';
import {NikoNikoModule} from '../modules/components/nikoNiko';
import {AppRoutingModule} from "../modules/routes/AppRoutes.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ApiModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
