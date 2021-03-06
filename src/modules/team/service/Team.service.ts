import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {AuthService} from "../../auth/service";
import {IInitialTeamData} from "../interface";
import {
    ApiTeammateService,
    ApiTeamService
} from "../../api";
import {IShortTeammateDto} from "../../core/dto";

@Injectable()
export class TeamService {

    constructor(private apiTeammateService: ApiTeammateService,
                private apiTeamService: ApiTeamService,
                private authService: AuthService) {

    }

    getTeammateListByTeamId(teamId: string): Observable<IShortTeammateDto[]> {
        return this.apiTeammateService.getAllInTeam(teamId);
    }

    getMyTeamData(): Observable<IInitialTeamData> {
        const currentUser = this.authService.getUserInfo();

        return this.apiTeamService.getInitialTeamData(currentUser.team.id)
    }
}