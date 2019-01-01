import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

export abstract class CommonComponentService implements OnDestroy {

    protected destroy$ = new Subject();

    ngOnDestroy(): void {
        this.destroy$.next();
    }
}