import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {ApiMoodService} from "../../api/services/apiMood.service";
import {AuthService} from "../../auth/service";
import {BrowserStorageHelper} from "../../auth/utils";

@Injectable()
export class MoodService {
    moodSocket: SocketIOClient.Socket;
    currentMoodLevel$ = new Subject<string>();

    constructor(private apiMoodService: ApiMoodService,
                private authService: AuthService) {

    }

    connectSocket() {
        const currentUser = this.authService.getUserInfo();

        this.moodSocket = this.apiMoodService.currentMoodConnection(
            currentUser && currentUser.id,
            BrowserStorageHelper.getAuthToken()
        );

        this.moodSocket.on('connect', () => {
            console.log('connected to ws: 3000');
            this.moodSocket.emit('currentOwnMoodLevel');
        });

        this.moodSocket.on('exception', (data) => {
            console.log('mood', data);
        });

        this.moodSocket.on('disconnect', () => {
            console.log('Disconnected');
        });

        this.moodSocket.on('currentOwnMoodLevel', (data) => {
            this.currentMoodLevel$.next(data)
        });
    }

    disconnectSocket() {
        this.moodSocket.disconnect();
    }

    selectMood(moodLevel: string) {
        const currentUser = this.authService.getUserInfo();

        this.moodSocket.emit('selectCurrentMood', {
            moodLevel: moodLevel,
            userId: currentUser && currentUser.id
        });
    }

    getCurrentMood(): Observable<string> {
        return this.currentMoodLevel$.asObservable();
    }
}