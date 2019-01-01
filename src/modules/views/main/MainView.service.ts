import {Injectable, OnDestroy} from "@angular/core";
import {ApiMoodService} from "../../api/services/apiMood.service";
import {takeUntil, tap} from "rxjs/operators";
import {CommonComponentService} from "../../common/services/commonComponentService/CommonComponent.service";
import {Observable, Subject} from "rxjs";

@Injectable()
export class MainViewService extends CommonComponentService implements OnDestroy {
    moodSocket: SocketIOClient.Socket;
    data$ = new Subject<string>();

    constructor(private apiMoodService: ApiMoodService) {
        super();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.moodSocket.close();
    }

    connectToSocket() {
        this.moodSocket = this.apiMoodService.currentMoodConnection();

        this.moodSocket.on('connect', () => {
            console.log('connected to ws: 3000');
            this.moodSocket.emit('currentMoodLevel');
        });

        this.moodSocket.on('exception', (data) => {
            console.log('currentMoodLevel', data);
        });

        this.moodSocket.on('disconnect', () => {
            console.log('Disconnected');
        });

        this.moodSocket.on('currentMoodLevel', (data) => {
            this.data$.next(data)
        });
    }

    data(): Observable<any> {
        return this.data$
            .pipe(
                tap(data => {
                    console.log(data);
                }),
                takeUntil(this.destroy$)
            )
    }
}