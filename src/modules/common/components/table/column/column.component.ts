import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {TableStateHolderService} from '../service/tableStateHolder.service';

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

    columnOffset = 0;

    constructor(private tableStateHolderService: TableStateHolderService) {
    }

    ngOnInit() {
        const {cellWidth, cellHeight} = this.tableStateHolderService.getDimensions();

        this.height = cellHeight;
        this.width = cellWidth;
        this.left = this.tableStateHolderService.getXoffset(this.index);

        this.columnOffset = this.tableStateHolderService.getXoffset(this.index);
    }
}
