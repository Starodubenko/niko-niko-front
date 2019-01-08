import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TeamViewComponent} from './TeamView.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        TeamViewComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    exports: [
        TeamViewComponent
    ]
})
export class TeamViewModule {
}
