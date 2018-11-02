import {Injectable} from '@angular/core';
import {ITeamDto, ITeammateDto, TeamDto} from './model';

const data = {
  employees: {
    '1': {
      id: '1',
      firstName: 'John',
      surname: 'Doe',
      teamId: '1',
      moods: [1, 2, 3, 1, 2, 3, 1, 2, 3]
    },
    '2': {
      id: '2',
      firstName: 'Michel',
      surname: 'Huk',
      teamId: '1',
      moods: [1, 2, 3, 1, 2, 3, 1, 2, 3]
    },
    '3': {
      id: '3',
      firstName: 'Vanessa',
      surname: 'Collins',
      teamId: '1',
      moods: [1, 2, 3, 1, 2, 3, 1, 2, 3]
    }
  },
  teams: {
    '1': {
      id: '1',
      title: 'tigers',
      employees: [1, 2, 3]
    },
    '2': {
      id: '2',
      title: 'tigers',
      employees: [1, 2, 3]
    }
  },
};

@Injectable()
export class ApiTeammateService {

  getById(employeeId: string): ITeammateDto {
    return data.employees[employeeId];
  }

  getAllInTeam(teamId: string): ITeamDto {
    const dto = data.teams[teamId];
    const teammates = dto.teammates.map(employeeId => {
      return data.employees[employeeId];
    });

    return new TeamDto(teammates, dto.id, dto.title);
  }

  getAll(): ITeammateDto[] {
    return Object.values(data.employees);
  }
}
