import {Injectable} from '@angular/core';
import {IShortTeamDto} from "../../core/dto";
import {teamData} from "./data";
import {IInitialTeamData} from "../../team/interface";
import {forkJoin, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ApiTeamService {
    getTeamList(): Observable<IShortTeamDto[]> {
        return of(Object.values(teamData.teams))
            .pipe(
                map(array =>
                    array.map(team => ({
                        id: team.id,
                        title: team.title
                    }))
                )
            );
    }

    getInitialTeamData(userId: string): Observable<IInitialTeamData> {
        const currentEmployee = teamData.teammates[userId];
        const currentTeam = teamData.teams[currentEmployee.teamId];

        return forkJoin(
            this.getTeamList()
        ).pipe(
            map(([teamList]) => ({
                currentTeamId: currentTeam.id,
                teamList
            }))
        )
    }
}
