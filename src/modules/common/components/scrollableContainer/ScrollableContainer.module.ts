import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ScrollableContainerComponent} from './ScrollableContainer.component';
import {ScrollService} from './service';

@NgModule({
  declarations: [
    ScrollableContainerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    ScrollableContainerComponent
  ],
  providers: [
    ScrollService
  ]
})
export class ScrollableContainerModule { }
