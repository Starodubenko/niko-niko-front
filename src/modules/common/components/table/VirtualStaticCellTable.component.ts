import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableStateHolderService} from './service/tableStateHolder.service';
import {calculateVisibleRows} from './service/helper';
import {ScrollService} from '../scrollableContainer/service';
import {ITableRow} from './model';

@Component({
    selector: 'app-virtual-static-cell-table',
    templateUrl: './VirtualStaticCellTable.component.html',
    styleUrls: ['./VirtualStaticCellTable.component.css'],
    providers: [
        TableStateHolderService
    ]
})
export class VirtualStaticCellTableComponent implements OnInit, AfterViewInit {

    @Input() rows: ITableRow[] = [];
    @Input() visibleRows: number;
    @Input() visibleColumns: number;
    @Input() viewWidth: number;
    @Input() viewHeight: number;
    @Input() tableName: string;
    @Input() useOwnScroll = true;
    @Input() valueMapper: (data) => any;
    @Input() containerTemplate: any;
    @Input() cellTemplate: any;

    @Output() totalTableDimensions = new EventEmitter();

    cellWidth = 0;
    cellHeight = 0;
    totalWidth = 0;
    totalHeight = 0;
    selectedRows: ITableRow[] = [];

    constructor(
        private tableStateHolderService: TableStateHolderService,
        private scrollService: ScrollService,
    ) {
    }

    ngOnInit() {
        if (!this.rows || !this.rows.length) {
            return;
        }

        this.cellWidth = this.viewWidth / this.visibleColumns;
        this.cellHeight = this.viewHeight / this.visibleRows;
        this.totalHeight = this.rows.length * this.cellHeight;
        this.totalWidth = this.rows[0].columns.length * this.cellWidth;

        this.tableStateHolderService.setDimensions({
            width: this.viewWidth,
            height: this.viewHeight,
            cellWidth: this.cellWidth,
            cellHeight: this.cellHeight,
            totalWidth: this.totalWidth,
            totalHeight: this.totalHeight,
        });

        this.tableStateHolderService.setMatrix(this.rows);

        this.selectedRows = this.getSelectedRows(0, this.cellHeight);
        this.scrollService.getScroll().subscribe(scroll => {
            this.selectedRows = this.getSelectedRows(scroll.target.scrollTop, this.cellHeight);
        });

        if(this.valueMapper) {
            this.tableStateHolderService.setValueMapper(this.valueMapper);
        }
    }

    ngAfterViewInit(): void {
        this.totalTableDimensions.emit({
            totalHeight: this.totalHeight,
            totalWidth: this.totalWidth
        });
    }

    trackById(index, item: ITableRow) {
        return item.index;
    }

    private getSelectedRows(scrollTop, cellHeight) {
        return calculateVisibleRows(
            scrollTop,
            this.rows,
            this.viewHeight,
            this.totalHeight,
            cellHeight
        );
    }
}
