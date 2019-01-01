import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainViewComponent} from './MainView.component';
import {MoodSelectorModule} from "../../moodSelector";

@NgModule({
    declarations: [
        MainViewComponent
    ],
    imports: [
        BrowserModule,
        MoodSelectorModule,
    ],
    exports: [
        MainViewComponent
    ]
})
export class MainViewModule {
}
