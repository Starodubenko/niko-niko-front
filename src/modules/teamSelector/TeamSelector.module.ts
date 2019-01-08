import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {TeamSelectorComponent} from './TeamSelector.component';
import {TeamSelectorService} from './service';
import {TeamModule} from "../team";


@NgModule({
    declarations: [
        TeamSelectorComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        TeamModule
    ],
    exports: [
        TeamSelectorComponent
    ],
    providers: [
        TeamSelectorService
    ]
})
export class TeamSelectorModule {
}
