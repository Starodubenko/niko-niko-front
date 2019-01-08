import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TeamViewComponent} from './TeamView.component';
import {TeamSelectorModule} from "../../teamSelector";

@NgModule({
    declarations: [
        TeamViewComponent
    ],
    imports: [
        BrowserModule,
        TeamSelectorModule
    ],
    exports: [
        TeamViewComponent
    ]
})
export class TeamViewModule {
}
