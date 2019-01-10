import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TeamMainViewComponent} from "./TeamMainView.component";
import {TeamSelectorModule} from "../../../teamSelector";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        TeamMainViewComponent
    ],
    imports: [
        BrowserModule,
        TeamSelectorModule,
        RouterModule
    ],
    exports: [
        TeamMainViewComponent
    ]
})
export class TeamMainViewModule {
}
