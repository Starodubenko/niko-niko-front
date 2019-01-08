import {IShortTeamDto} from "./Team.dto";

export class UserDto {
    id: string;
    name: string;
    surname: string;
    team: IShortTeamDto;
}