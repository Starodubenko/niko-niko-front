import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {UnauthorizedViewComponent} from './UnauthorizedView.component';
import {AuthModule} from "../../auth";

@NgModule({
    declarations: [
        UnauthorizedViewComponent,
    ],
    imports: [
        BrowserModule,
        AuthModule
    ],
    exports: [
        UnauthorizedViewComponent
    ]
})
export class UnauthorizedViewModule {
}
