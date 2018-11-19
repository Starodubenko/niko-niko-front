import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {TableStateHolderService} from '../service/tableStateHolder.service';
import {calculateVisibleColumns} from '../service/helper';
import {ScrollService} from '../../scrollableContainer/service';
import {ITableColumn} from '../model';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @HostBinding('style.height.px') height = 0;
  @HostBinding('style.width.px') width = 0;
  @HostBinding('style.top.px') top = 0;

  @Input() index;
  @Input() cellTemplate: any;

  selectedColumns: ITableColumn[] = [];

  private totalWidth;

  constructor(private tableStateHolderService: TableStateHolderService,
              private scrollService: ScrollService) {

  }

  ngOnInit() {
    const {totalWidth, cellWidth, cellHeight} = this.tableStateHolderService.getDimensions();

    this.height = cellHeight;
    this.width = totalWidth;
    this.top = this.tableStateHolderService.getYoffset(this.index);

    this.totalWidth = totalWidth;

    this.selectedColumns = this.getSelectedColumns(0, cellWidth);
    this.scrollService.getScroll()
      .subscribe(scroll => {
        this.selectedColumns = this.getSelectedColumns(scroll.target.scrollLeft, cellWidth);
      });
  }

  trackById(index, item: ITableColumn) {
    return item.index;
  }

  private getSelectedColumns(scrollLeft, cellWidth) {
    return calculateVisibleColumns(
      scrollLeft,
      this.tableStateHolderService.getMatrix()[this.index].columns,
      this.width,
      this.totalWidth,
      cellWidth
    );
  }
}
