import {ITeammateDto} from "./Teammate.dto";

export interface IMoodDto {
  value: number;
  date: number;
  teammate: ITeammateDto
}
