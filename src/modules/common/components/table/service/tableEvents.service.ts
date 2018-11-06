import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class TableEventsService {
  cellClick$ = new Subject();

  fireCellClick(data: any) {
    this.cellClick$.next(data);
  }

  watchCellClick(): Observable<any> {
    return this.cellClick$;
  }
}
