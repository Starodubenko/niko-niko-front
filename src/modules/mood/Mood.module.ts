import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MoodService} from "./service/Mood.service";
import {MoodItemComponent} from "./moodItem";


@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        MoodItemComponent
    ],
    exports: [
      MoodItemComponent
    ],
    providers: [
        MoodService
    ]
})
export class MoodModule {
}
