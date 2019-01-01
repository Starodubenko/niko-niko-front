import {BehaviorSubject, Subject} from 'rxjs';
import {MetricsView} from '../../constants';
import {DateInterval} from "../../../core/model";
import {ITeammateDto} from "../../../core/dto";

export interface IDataProvider {
  interval$: BehaviorSubject<DateInterval>;
  metricsView$: BehaviorSubject<MetricsView>;
  teammates$: Subject<ITeammateDto[]>;

  setMetricsView(value: MetricsView);

  setInterval(value: DateInterval);

  setTeammates(value: ITeammateDto[]);
}
