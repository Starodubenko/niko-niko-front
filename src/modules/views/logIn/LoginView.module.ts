import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoginViewComponent} from './LoginView.component';

@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    LoginViewComponent
  ]
})
export class LoginViewModule { }
