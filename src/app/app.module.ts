import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApiModule} from '../modules/api';
import {AppRoutingModule} from "../modules/routes/AppRoutes.module";
import {AuthModule} from "../modules/auth";
import {TeamViewModule} from "../modules/views";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ApiModule,
        AuthModule,
        AppRoutingModule,
        TeamViewModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
