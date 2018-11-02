import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NikoNikoComponent} from './NikoNiko.component';
import {VirtualStaticCellTableModule} from '../../common/components/table';
import {ScrollableContainerModule} from '../../common/components/scrollableContainer';

@NgModule({
  declarations: [
    NikoNikoComponent,
  ],
  imports: [
    BrowserModule,
    VirtualStaticCellTableModule,
    ScrollableContainerModule
  ],
  exports: [
    NikoNikoComponent
  ]
})
export class NikoNikoModule { }
