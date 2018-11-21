import {Component, ElementRef, HostBinding, Inject, Input, OnInit, ViewChild} from '@angular/core';
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
    @Input() cellsCount = {rows: 0, cols: 0};
    @Input() cellsDimensions = {width: 0, height: 0};
    @Input() data: INikoNikoData;

    @HostBinding('style.height.px') hostHeight;
    @HostBinding('style.width.px') hostWidth;

    @ViewChild('nikoNiko') nikoNiko;

    pointerEvents = 'none';

    yWidth = 200;
    yHeight;
    xWidth;
    xHeight = 50;

    totalWidth = 0;
    totalHeight = 0;

    namesRows = [];
    matrixRows = [];
    datesColumns = [];

    constructor(private elementRef: ElementRef,
        @Inject(DataProviderToken) private dataProvider: IDataProvider) {
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
