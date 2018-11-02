import {Injectable} from '@angular/core';
import {MetricsView} from '../../constants';
import {BehaviorSubject, Subject} from 'rxjs';
import {DateInterval} from '../../model';
import {IDataProvider} from './DataProvider.interface';
import {ITeammateDto} from '../../../api/model';

@Injectable()
export class DataProviderService implements IDataProvider {

  private _interval$ = new BehaviorSubject(DateInterval.twoWeeks());
  private _metricsView$ = new BehaviorSubject(MetricsView.TABLE);
  private _mainMatrix$ = new BehaviorSubject([]);
  private _teammates$ = new BehaviorSubject<ITeammateDto[]>([]);
  private _currentTeammate$ = new Subject<ITeammateDto>();

  get metricsView$(): BehaviorSubject<MetricsView> {
    return this._metricsView$;
  }

  setMetricsView(value: MetricsView) {
    this._metricsView$.next(value);
  }

  get interval$(): BehaviorSubject<DateInterval> {
    return this._interval$;
  }

  setInterval(value: DateInterval) {
    this._interval$.next(value);
  }

  get teammates$(): BehaviorSubject<ITeammateDto[]> {
    return this._teammates$;
  }

  setTeammates(value: ITeammateDto[]) {
    this._teammates$.next(value);
  }

  get mainMatrix$(): BehaviorSubject<any[]> {
    return this._mainMatrix$;
  }

  get teammate$(): Subject<ITeammateDto> {
    return this._currentTeammate$;
  }

  setTeammate(value: ITeammateDto) {
    this._currentTeammate$.next(value);
  }
}
