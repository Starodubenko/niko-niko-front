import {Injectable} from '@angular/core';
import {ReplaySubject, Observable, Subject, BehaviorSubject} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable()
export class ScrollService {

    scrollChanges$ = new Subject<any>();
    scroll$ = new ReplaySubject<any>(null);
    isDisableMasterScroll$ = new BehaviorSubject<boolean>(false);

    constructor() {
    }

    setScroll(scroll, scrollId = '') {
        this.scroll$.next(scroll);
        this.scrollChanges$.next({scroll, scrollId});
    }

    getScroll(): Observable<any> {
        return this.scroll$
            .pipe(
                filter(val => val)
            );
    }

    getScrollChanges(): Observable<any> {
        return this.scrollChanges$;
    }

    disableMasterScroll() {
        this.isDisableMasterScroll$.next(true);
    }

    enableMasterScroll() {
        this.isDisableMasterScroll$.next(false);
    }

    isDisableMasterScroll(): Observable<boolean> {
        return this.isDisableMasterScroll$;
    }
}
