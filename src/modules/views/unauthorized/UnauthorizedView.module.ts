import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {UnauthorizedViewComponent} from './UnauthorizedView.component';

@NgModule({
  declarations: [
    UnauthorizedViewComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    UnauthorizedViewComponent
  ]
})
export class UnauthorizedViewModule { }
