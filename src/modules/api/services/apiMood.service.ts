import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IMoodDto} from "../../core/dto";
import {teammateData} from "./apiTeammate.sevice";
import * as io from "socket.io-client";

const data = {
    mood: {
        '1': {
            value: 3,
            date: new Date(),
            teammate: teammateData['1']
        },
        '2': {
            value: 2,
            date: new Date(),
            teammate: teammateData['2']
        },
        '3': {
            value: 1,
            date: new Date(),
            teammate: teammateData['3']
        }
    },
};

@Injectable()
export class ApiMoodService {
    getMood(employeeId: string): Observable<IMoodDto> {
        return data.mood[employeeId];
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