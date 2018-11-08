import {Injectable} from '@angular/core';
import {ITeamDto, ITeammateDto, TeamDto} from './model';

const generateMood = (index) => {
  return {
      value: Math.round(Math.random() * 2 + 1),
      date: Date.now() + index,
  }
};

const generateMoods = (count) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(generateMood(i));
  }

  return result;
};

const data = {
  employees: {
    '1': {
      id: '1',
      firstName: 'John',
      surname: 'Doe',
      teamId: '1',
      moods: generateMoods(20)
    },
    '2': {
      id: '2',
      firstName: 'Michel',
      surname: 'Huk',
      teamId: '1',
      moods: generateMoods(20)
    },
    '3': {
      id: '3',
      firstName: 'Vanessa',
      surname: 'Collins',
      teamId: '1',
      moods: generateMoods(20)
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
