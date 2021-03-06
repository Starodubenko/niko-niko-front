import {ITeammateDto} from './Teammate.dto';

export interface IShortTeamDto {
  id: string;
  title: string;
}

export interface ITeamDto extends IShortTeamDto {
  id: string;
  title: string;
  teammates: ITeammateDto[];
}

export class TeamDto implements ITeamDto {
  id: string;
  title: string;
  teammates: ITeammateDto[];

  constructor(id: string, title: string, teammates: ITeammateDto[], ) {
    this.id = id;
    this.title = title;
    this.teammates = teammates;
  }
}
