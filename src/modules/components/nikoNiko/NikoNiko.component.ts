import {Component, HostBinding, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DataProviderToken} from '../../common/services/dataProvider/constants';
import {IDataProvider} from '../../common/services/dataProvider';
import {ScrollService} from '../../common/components/scrollableContainer/service';
import {INikoNikoData} from "./interface/nikoNikoData.interface";

@Component({
    selector: 'app-niko-niko',
    templateUrl: './NikoNiko.component.html',
    styleUrls: ['./NikoNiko.component.css'],
    providers: [
        ScrollService
    ]
})
export class NikoNikoComponent implements OnInit {

    @Input() height;
    @Input() width;
    @Input() rowsCount = 10;
    @Input() data: INikoNikoData;

    @HostBinding('style.height.px') hostHeight;
    @HostBinding('style.width.px') hostWidth;

    @HostListener('mousedown')
    onMouseDown() {
        this.scrollService.disableMasterScroll();
    }

    @HostListener('click')
    onMouseUp() {
        this.scrollService.enableMasterScroll();
    }

    yWidth = 200;
    yHeight;
    xWidth;
    xHeight = 50;

    totalWidth = 0;
    totalHeight = 0;

    namesRows = [];
    matrixRows = [];
    datesColumns = [];

    constructor(@Inject(DataProviderToken) private dataProvider: IDataProvider,
                private scrollService: ScrollService) {
    }

    ngOnInit() {
        this.hostHeight = this.height;
        this.hostWidth = this.width;

        this.xWidth = this.width - this.yWidth;
        this.yHeight = this.height - this.xHeight;

        const {datesColumns, namesRows, matrixRows} = this.data;

        this.namesRows = namesRows;
        this.matrixRows = matrixRows;
        this.datesColumns = datesColumns;
    }

    getTotalDimensions({totalWidth, totalHeight}) {
        setTimeout(() => {
            console.log('set dimensions');
            this.totalWidth = totalWidth;
            this.totalHeight = totalHeight;
        })
    }

    handleCellClick(cellValue) {
        console.log('cell value', cellValue);
    }

    xAxisValueMapper(data) {
        return new Date(data.timestamp).toLocaleDateString();
    }

    yAxisValueMapper(data) {
        return data.name;
    }

    sheetValueMapper(data) {
        return data.mood.value;
    }
}
