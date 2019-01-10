import {Injectable} from '@angular/core';
import {IShortTeammateDto, ITeammateDto} from "../../core/dto";
import {teamData} from "./data";
import {Observable, of} from "rxjs";

@Injectable()
export class ApiTeammateService {

    getById(employeeId: string): ITeammateDto {
        return teamData.teammates[employeeId];
    }

    getAllInTeam(teamId: string): Observable<IShortTeammateDto[]> {
        if (!teamId) {
            of([]);
        }

        const dto = teamData.teams[teamId];
        const teammateList = dto.teammates.map(employeeId => {
            const teammate = teamData.teammates[employeeId];
            return {
                id: teammate.id,
                firstName: teammate.firstName,
                surname: teammate.surname,
                currentMoodLevel: teammate.currentMoodLevel,
            };
        });

        return of(teammateList);
    }

    getAll(): ITeammateDto[] {
        return Object.values(teamData.teammates);
    }
}
