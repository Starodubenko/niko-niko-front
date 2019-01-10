import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TeammateListViewComponent} from './TeammateListView.component';
import {TeammateListModule} from "../../../teammateList";
import {TeamSelectorModule} from "../../../teamSelector";

@NgModule({
    declarations: [
        TeammateListViewComponent
    ],
    imports: [
        BrowserModule,
        TeamSelectorModule,
        TeammateListModule,
    ],
    exports: [
        TeammateListViewComponent
    ]
})
export class TeammateListViewModule {
}
