import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {VirtualStaticCellTableComponent} from './VirtualStaticCellTable.component';
import {RowComponent} from './row/row.component';
import {ColumnComponent} from './column/column.component';
import {ScrollableContainerModule, ScrollService} from '../scrollableContainer';
import {TableEventsService} from "./service/tableEvents.service";

@NgModule({
    declarations: [
        VirtualStaticCellTableComponent,
        ColumnComponent,
        RowComponent
    ],
    imports: [
        BrowserModule,
        ScrollableContainerModule
    ],
    exports: [
        VirtualStaticCellTableComponent
    ],
    providers: [
        ScrollService,
        TableEventsService
    ]
})
export class VirtualStaticCellTableModule {
}
