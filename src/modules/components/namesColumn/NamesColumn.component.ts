import {Component, Inject, OnInit} from '@angular/core';
import {DataProviderToken} from '../../common/services/dataProvider/constants';
import {IDataProvider} from '../../common/services/dataProvider';
import {ScrollService} from '../../common/components/scrollableContainer/service';
import {ITeammateDto} from '../../api/model';

@Component({
  selector: 'app-metrics-view',
  templateUrl: './NamesColumn.component.html',
  styleUrls: ['./NamesColumn.component.css']
})
export class NamesColumnComponent implements OnInit {

  teammateList: ITeammateDto[];

  constructor(@Inject(DataProviderToken) private dataProvider: IDataProvider,
              private scrollService: ScrollService) {}

  ngOnInit() {
    this.dataProvider.teammates$.subscribe(data => this.teammateList = data);
  }
}

// todo Sync the scrolls in the NamesColumn, MainMatrix and DatesRow Components, Adjust getting data from api service
