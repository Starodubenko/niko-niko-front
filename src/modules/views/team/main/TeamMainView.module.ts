import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TeamMainViewComponent} from "./TeamMainView.component";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        TeamMainViewComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [
        TeamMainViewComponent
    ]
})
export class TeamMainViewModule {
}
