import {Component, Inject, OnInit} from '@angular/core';
import {MetricsView} from '../../common/constants';
import {DataProviderToken} from '../../common/services/dataProvider/constants';
import {IDataProvider} from '../../common/services/dataProvider';

@Component({
  selector: 'app-metrics-view',
  templateUrl: './MetricsView.component.html',
  styleUrls: ['./MetricsView.component.css']
})
export class MetricsViewComponent implements OnInit {

  metricsView = MetricsView.TABLE;

  constructor(@Inject(DataProviderToken) private dataProvider: IDataProvider) {}

  ngOnInit() {
    this.dataProvider.metricsView$.subscribe(data => this.metricsView = data);
  }

  isTable(): boolean {
    return this.metricsView === MetricsView.TABLE;
  }

  isPieChart(): boolean {
    return this.metricsView === MetricsView.PIE_CHART;
  }

  selectTable() {
    this.dataProvider.setMetricsView(MetricsView.TABLE);
  }

  selectPieChart() {
    this.dataProvider.setMetricsView(MetricsView.PIE_CHART);
  }
}
