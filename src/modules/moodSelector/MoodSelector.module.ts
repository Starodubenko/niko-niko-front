import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MoodSelectorComponent} from './MoodSelector.component';
import {MoodSelectorService} from './service';
import {MoodModule} from "../mood";


@NgModule({
    declarations: [
        MoodSelectorComponent
    ],
    imports: [
        BrowserModule,
        MoodModule
    ],
    exports: [
        MoodSelectorComponent
    ],
    providers: [
        MoodSelectorService
    ]
})
export class MoodSelectorModule {
}
