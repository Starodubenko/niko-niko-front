import {Injectable, OnDestroy} from "@angular/core";
import {TeamService} from "../../team/service/Team.service";
import {IInitialTeamData} from "../../team/interface";
import {Observable} from "rxjs";
import {IShortTeammateDto} from "../../core/dto";

@Injectable()
export class TeamSelectorService implements OnDestroy {

    constructor(private teamService: TeamService) {
    }

    selectTeam(teamId: string): Observable<IShortTeammateDto[]>{
        return this.teamService.getTeammateListByTeamId(teamId);
    }

    currentTeam(): Observable<IInitialTeamData> {
        return this.teamService.getMyTeamData();
    }

    ngOnDestroy(): void {
    }
}