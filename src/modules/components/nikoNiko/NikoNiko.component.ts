import {Component, HostBinding, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DataProviderToken} from '../../common/services/dataProvider/constants';
import {IDataProvider} from '../../common/services/dataProvider';
import {ScrollService} from '../../common/components/scrollableContainer/service';

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

    @HostBinding('style.height.px') hostHeight;
    @HostBinding('style.width.px') hostWidth;

    @HostListener('mousedown')
    onMouseDown() {
        this.scrollService.disableMasterScroll();
    }

    @HostListener('mouseup')
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

        const rows = [];
        const moods = [];

        for (let i = 0; i < 30; i++) {
            moods.push({
                index: i,
                data: {
                    mood: Math.round(Math.random() * 2 + 1),
                    userId: i,
                    date: Date.now() + i
                },
                label: Date.now() + i,
            });
        }

        for (let i = 0; i < 30; i++) {
            rows.push({
                index: i,
                label: 'teamMemberId_' + i,
                columns: moods
            });
        }

        this.namesRows = [...rows].map((row, index) => {
            return {
                ...row,
                columns: [
                    {
                        index: 0,
                        label: row.label,
                        data: {
                            userId: row.columns[index].data.userId,
                            name: row.label
                        },
                    }
                ]
            };
        });

        this.matrixRows = [...rows];

        const datesRow = {...rows[0]};
        datesRow.columns = datesRow.columns.map(col => {
            return {
                index: col.index,
                label: col.label,
                data: new Date(col.label).toLocaleDateString(),
            };
        });
        this.datesColumns = [datesRow];
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

    yAxisValueMapper(data) {
        return data.name;
    }

    sheetValueMapper(data) {
        return data.mood;
    }
}
