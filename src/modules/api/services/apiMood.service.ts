import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {IMoodDto} from "../../core/dto";
import * as io from "socket.io-client";

@Injectable()
export class ApiMoodService {
    getMood(employeeId: string): Observable<IMoodDto> {
        return of(null);
    }

    updateMood() {

    }

    currentMoodConnection(userId: string, token: string): SocketIOClient.Socket {
        return io('http://127.0.0.1:3000/mood', {
            query: {
                userId,
                token
            }
        });
    }
}