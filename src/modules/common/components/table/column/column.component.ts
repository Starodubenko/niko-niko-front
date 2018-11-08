import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {TableStateHolderService} from '../service/tableStateHolder.service';
import {TableEventsService} from "../service/tableEvents.service";

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

    @HostBinding('style.height.px') height = 0;
    @HostBinding('style.width.px') width = 0;
    @HostBinding('style.left.px') left = 0;

    @Input() index;
    @Input() data;

    @HostListener('mouseup') // like an onClick once mouse up event happened
    onMouseOver() {
        this.tableEventsService.fireCellClick(this.data);
    }

    columnOffset = 0;

    constructor(
        private tableStateHolderService: TableStateHolderService,
        private tableEventsService: TableEventsService
    ) {
    }

    ngOnInit() {
        const {cellWidth, cellHeight} = this.tableStateHolderService.getDimensions();

        this.height = cellHeight;
        this.width = cellWidth;
        this.left = this.tableStateHolderService.getXoffset(this.index);

        this.columnOffset = this.tableStateHolderService.getXoffset(this.index);
    }

    getData(): string {
        return this.tableStateHolderService.getValueMapper()(this.data);
    }
}
