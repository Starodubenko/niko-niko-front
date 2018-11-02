import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NamesColumnComponent} from './NamesColumn.component';

@NgModule({
  declarations: [
    NamesColumnComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NamesColumnComponent
  ]
})
export class NamesColumnModule { }
