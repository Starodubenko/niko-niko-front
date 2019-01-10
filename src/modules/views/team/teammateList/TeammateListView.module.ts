import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TeammateListViewComponent} from './TeammateListView.component';

@NgModule({
    declarations: [
        TeammateListViewComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        TeammateListViewComponent
    ]
})
export class TeammateListViewModule {
}
