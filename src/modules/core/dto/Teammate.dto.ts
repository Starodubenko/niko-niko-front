import {IMoodDto} from "./Mood.dto";

export interface IShortTeammateDto {
  id: string;
  firstName: string;
  surname: string;
  currentMoodLevel?: string;
}

export interface ITeammateDto extends IShortTeammateDto {
  moods: IMoodDto[];
  teamId: string;
}
