import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NotFoundViewComponent} from './NotFoundView.component';

@NgModule({
  declarations: [
    NotFoundViewComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NotFoundViewComponent
  ]
})
export class NotFoundViewModule { }
