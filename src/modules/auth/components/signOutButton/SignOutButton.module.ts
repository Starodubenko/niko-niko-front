import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SignOutButtonComponent} from './SignOutButton.component';

@NgModule({
    declarations: [
        SignOutButtonComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        SignOutButtonComponent
    ]
})
export class SignOutButtonModule {
}
