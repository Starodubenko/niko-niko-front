import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MoodItemComponent} from "./MoodItem.component";


@NgModule({
    declarations: [
        MoodItemComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        MoodItemComponent
    ]
})
export class MoodItemModule {
}
