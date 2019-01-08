import {Injectable} from '@angular/core';
import {ITeamDto, ITeammateDto, TeamDto} from "../../core/dto";
import {teamData} from "./data";

@Injectable()
export class ApiTeammateService {

  getById(employeeId: string): ITeammateDto {
    return teamData.employees[employeeId];
  }

  getAllInTeam(teamId: string): ITeamDto {
    const dto = teamData.teams[teamId];
    const teammates = dto.teammates.map(employeeId => {
      return teamData.employees[employeeId];
    });

    return new TeamDto(teammates, dto.id, dto.title);
  }

  getAll(): ITeammateDto[] {
    return Object.values(teamData.employees);
  }
}
