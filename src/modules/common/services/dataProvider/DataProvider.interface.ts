import {BehaviorSubject, Subject} from 'rxjs';
import {MetricsView} from '../../constants';
import {DateInterval} from '../../model';
import {ITeammateDto} from '../../../api/model';

export interface IDataProvider {
  interval$: BehaviorSubject<DateInterval>;
  metricsView$: BehaviorSubject<MetricsView>;
  teammates$: Subject<ITeammateDto[]>;

  setMetricsView(value: MetricsView);

  setInterval(value: DateInterval);

  setTeammates(value: ITeammateDto[]);
}
