import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SignInFormComponent} from './SignInForm.component';

@NgModule({
    declarations: [
        SignInFormComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        SignInFormComponent
    ]
})
export class SignInFormModule {
}
