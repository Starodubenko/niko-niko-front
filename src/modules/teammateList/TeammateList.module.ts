import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TeammateListComponent} from './TeammateList.component';
import {TeammateListService} from './service';


@NgModule({
    declarations: [
        TeammateListComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        TeammateListComponent
    ],
    providers: [
        TeammateListService
    ]
})
export class TeammateListModule {
}
