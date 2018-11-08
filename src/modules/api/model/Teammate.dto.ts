import {IMoodDto} from "./Mood.dto";

export interface ITeammateDto {
  id: string;
  firstName: string;
  surname: string;
  moods: IMoodDto[];
  teamId: string;
}
